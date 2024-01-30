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

@Entity({ name: 'history' })
export class History extends CommonEntity {
  @ManyToOne(() => Player, (player) => player.history)
  player: Player;

  @Column({ nullable: false })
  team: string;

  @Column({ nullable: false })
  start: string;

  @Column({ nullable: false })
  end: string;
}
