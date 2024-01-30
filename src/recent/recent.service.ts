import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Recent } from './recent.entity';
import { Repository } from 'typeorm';
import { Match } from 'src/match/match.entity';
import { User } from 'src/user/user.entity';

@Injectable()
export class RecentService {
  constructor(
    @InjectRepository(Recent)
    private recentRepository: Repository<Recent>,
    @InjectRepository(Match)
    private matchRepository: Repository<Match>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll() {
    return await this.recentRepository.find({ relations: ['user', 'match'] });
  }

  async findByUser(user: User) {
    return await this.recentRepository.find({
      where: { user: { id: user.id } },
      relations: ['user', 'match', 'match.user', 'match.comment'],
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async create({ userId, matchId }: { userId: number; matchId: number }) {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['recent'],
    });
    const match = await this.matchRepository.findOne({
      where: { id: matchId },
      relations: ['recent'],
    });

    const recent = await this.recentRepository.save({ user, match });
    /*     user.recent = [...user.recent, recent];
    match.recent = [...match.recent, recent];

    await this.userRepository.save(user);
    await this.matchRepository.save(match);
 */
    return recent;
  }
}
