import { CommonEntity } from 'src/common/entities/common.entity';
import { Match } from 'src/match/match.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'gallery' })
export class Gallery extends CommonEntity {
  @ManyToOne(() => Match, (match) => match.gallery)
  match: Match;

  @Column({ nullable: false })
  uri: string;
}
