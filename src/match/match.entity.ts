import { CommonEntity } from 'src/common/entities/common.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'match' })
export class Match extends CommonEntity {
  @Column()
  homeTeam: string;

  @Column()
  awayTeam: string;

  @Column()
  matchDate: Date;

  @Column()
  tournament: string;

  @Column()
  round: string;

  @Column()
  score: number;
}
