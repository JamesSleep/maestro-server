import { IsNotEmpty, IsString } from 'class-validator';
import { Club } from 'src/club/club.entity';
import { Comment } from 'src/comment/comment.entity';
import { CommonEntity } from 'src/common/entities/common.entity';
import { Gallery } from 'src/gallery/gallery.entity';
import { Match } from 'src/match/match.entity';
import { Player } from 'src/player/player.entity';
import { Tournament } from 'src/tournament/tournament.entity';
import { User } from 'src/user/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'recent' })
export class Recent extends CommonEntity {
  @ManyToOne(() => Match, (match) => match.recent)
  match: Match;

  @ManyToOne(() => User, (user) => user.recent)
  user: User;
}
