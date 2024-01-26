import { CommonEntity } from 'src/common/entities/common.entity';
import { Match } from 'src/match/match.entity';
import { User } from 'src/user/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity({ name: 'comment' })
export class Comment extends CommonEntity {
  @ManyToOne(() => Match, (match) => match.comment)
  match: Match;

  @ManyToOne(() => User, (user) => user.comment)
  user: User;

  @Column({ nullable: true })
  content: string;

  @Column({ nullable: true, type: 'double' })
  score: number;
}
