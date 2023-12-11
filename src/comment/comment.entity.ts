import { CommonEntity } from 'src/common/entities/common.entity';
import { Match } from 'src/match/match.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity({ name: 'comment' })
export class Comment extends CommonEntity {
  @ManyToOne(() => Match, (match) => match.comment)
  match: Match;

  @Column()
  content: string;

  @Column()
  score: number;
}
