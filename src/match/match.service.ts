import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Match } from './match.entity';
import { Repository } from 'typeorm';
import { CreateMatchDto } from './dto/match.create.dto';
import { UpdateMatchDto } from './dto/match.update.dto';

@Injectable()
export class MatchService {
  constructor(
    @InjectRepository(Match)
    private matchRepository: Repository<Match>,
  ) {}

  async findAll() {
    return await this.matchRepository.find();
  }

  async findOne(id: number) {
    return await this.matchRepository.findOne({ where: { id } });
  }

  async create(body: CreateMatchDto) {
    return await this.matchRepository.save(body);
  }

  async modify(id: number, body: UpdateMatchDto) {
    if (!body.score) throw new BadRequestException('점수를 입력해주세요.');

    return await this.matchRepository.save({ id, ...body });
  }

  async remove(id: number) {
    return await this.matchRepository.softDelete(id);
  }
}
