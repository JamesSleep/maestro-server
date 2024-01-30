import { Module } from '@nestjs/common';
import { MatchController } from './match.controller';
import { MatchService } from './match.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Match } from './match.entity';
import { User } from 'src/user/user.entity';
import { Player } from 'src/player/player.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Match, User, Player])],
  controllers: [MatchController],
  providers: [MatchService],
})
export class MatchModule {}
