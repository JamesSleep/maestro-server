import { CommonEntity } from 'src/common/entities/common.entity';
import { Match } from 'src/match/match.entity';
import { Player } from 'src/player/player.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'winning' })
export class Winning extends CommonEntity {
  @ManyToOne(() => Player, (player) => player.winning)
  player: Player;

  @Column({ nullable: false })
  title: string;
}
