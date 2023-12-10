import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Club } from './club.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClubService {
  constructor(
    @InjectRepository(Club)
    private clubRepository: Repository<Club>,
  ) {}

  async findAll() {
    return await this.clubRepository.find();
  }
}
