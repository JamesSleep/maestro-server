import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Match } from './match.entity';
import { Repository } from 'typeorm';
import { CreateMatchDto } from './dto/match.create.dto';
import { LikeMatchDto, UpdateMatchDto } from './dto/match.update.dto';
import { User } from 'src/user/user.entity';

@Injectable()
export class MatchService {
  constructor(
    @InjectRepository(Match)
    private matchRepository: Repository<Match>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll() {
    return await this.matchRepository.find({
      relations: ['players', 'user', 'comment', 'comment.user', 'gallery'],
    });
  }

  async findOne(id: number) {
    return await this.matchRepository.findOne({
      where: { id },
      relations: ['players', 'user', 'comment', 'comment.user', 'gallery'],
    });
  }

  async create(body: CreateMatchDto) {
    return await this.matchRepository.save(body);
  }

  async likeMatch(body: LikeMatchDto) {
    const { matchId, userId } = body;

    const user = await this.userRepository.findOne({ where: { id: userId } });
    const match = await this.matchRepository.findOne({
      where: { id: matchId },
      relations: ['user'],
    });
    const isUserLiked =
      match.user.filter((_user) => _user.id === user.id).length > 0;

    if (isUserLiked) {
      match.user = match.user.filter((_user) => _user.id !== user.id);
    } else {
      match.user = [...match.user, user];
    }

    return await this.matchRepository.save(match);
  }

  async modify(id: number, body: UpdateMatchDto) {
    if (!body.score) throw new BadRequestException('점수를 입력해주세요.');

    return await this.matchRepository.save({ id, ...body });
  }

  async remove(id: number) {
    return await this.matchRepository.softDelete(id);
  }
}
