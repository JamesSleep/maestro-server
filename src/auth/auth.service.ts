import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { LoginUserRequestDto } from './dto/login.user.request.dto';
import * as Bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async jwtUserLogin(data: LoginUserRequestDto) {
    const { email, password } = data;

    const user = await this.userRepository.findOne({ where: { email } });

    if (!user) {
      throw new UnauthorizedException('로그인정보를 확인해주세요.');
    }

    const isPasswordValidated = await Bcrypt.compare(password, user.password);

    if (!isPasswordValidated) {
      throw new UnauthorizedException('로그인정보를 확인해주세요.');
    }

    const payload = { email, sub: user.id };

    return {
      token: this.jwtService.sign(payload),
    };
  }

  async getCurrentUser(getUser: User) {
    try {
      const user = await this.userRepository.findOne({
        where: { id: getUser.id },
      });
      return user;
    } catch (e) {
      throw new UnauthorizedException('토큰값이 올바르지 않습니다.');
    }
  }
}
