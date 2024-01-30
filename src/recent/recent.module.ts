import { Module } from '@nestjs/common';
import { RecentController } from './recent.controller';
import { RecentService } from './recent.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recent } from './recent.entity';
import { Match } from 'src/match/match.entity';
import { User } from 'src/user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Recent, Match, User])],
  controllers: [RecentController],
  providers: [RecentService],
})
export class RecentModule {}
