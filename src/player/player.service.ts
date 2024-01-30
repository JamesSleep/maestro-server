import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Player } from './player.entity';
import { Repository } from 'typeorm';
import { LikePlayerDto } from './dto/player.update.dto';
import { User } from 'src/user/user.entity';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Player)
    private playerRepository: Repository<Player>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll() {
    return await this.playerRepository.find({
      relations: ['user', 'winning', 'history'],
    });
  }

  async likePlayer(body: LikePlayerDto) {
    const { playerId, userId } = body;

    const user = await this.userRepository.findOne({ where: { id: userId } });
    const player = await this.playerRepository.findOne({
      where: { id: playerId },
      relations: ['user'],
    });
    const isUserLiked =
      player.user.filter((_user) => _user.id === user.id).length > 0;

    if (isUserLiked) {
      player.user = player.user.filter((_user) => _user.id !== user.id);
    } else {
      player.user = [...player.user, user];
    }

    return await this.playerRepository.save(player);
  }
}
