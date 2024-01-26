import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import * as Bcrypt from 'bcryptjs';
import { CreateUserDto } from './dto/user.create.dto';
import { UpdateUserDto } from './dto/user.update.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getAllUsers() {
    return await this.userRepository.find();
  }

  async getOneUser(id: number) {
    return await this.userRepository.findOne({ where: { id } });
  }

  async create(body: CreateUserDto) {
    const { password } = body;

    const isExistEmail = await this.userRepository.findOne({
      where: { email: body.email },
    });
    const isExistNickname = await this.userRepository.findOne({
      where: { nickname: body.nickname },
    });
    if (isExistEmail)
      throw new BadRequestException('이미 존재하는 이메일입니다.');
    if (isExistNickname)
      throw new BadRequestException('이미 존재하는 닉네임입니다.');

    const pw = await Bcrypt.hash(password, 10);

    let createdUser = await this.userRepository.save({ ...body, password: pw });

    delete createdUser.password;

    return createdUser;
  }

  async modify(id: number, body: UpdateUserDto) {
    const user = await this.userRepository.findOne({ where: { id } });

    return await this.userRepository.save({ ...user, ...body });
  }

  async remove(id: number) {
    return await this.userRepository.softDelete(id);
  }
}
