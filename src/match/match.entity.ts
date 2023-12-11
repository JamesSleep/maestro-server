import { IsNotEmpty } from 'class-validator';
import { Club } from 'src/club/club.entity';
import { Comment } from 'src/comment/comment.entity';
import { CommonEntity } from 'src/common/entities/common.entity';
import { Player } from 'src/player/player.entity';
import { Tournament } from 'src/tournament/tournament.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'match' })
export class Match extends CommonEntity {
  @OneToMany(() => Comment, (comment) => comment.match)
  comment: Comment;

  @IsNotEmpty({ message: '블루팀을 입력해주세요.' })
  @ManyToOne(() => Club)
  @JoinColumn({ name: 'blueTeamId', referencedColumnName: 'id' })
  blueTeam: Club;

  @IsNotEmpty({ message: '레드팀을 입력해주세요.' })
  @ManyToOne(() => Club)
  @JoinColumn({ name: 'redTeamId', referencedColumnName: 'id' })
  redTeam: Club;

  @IsNotEmpty({ message: '블루팀 선수들 입력해주세요.' })
  @ManyToMany(() => Player)
  blueTeamPlayers: Player[];

  @IsNotEmpty({ message: '레드팀 선수들 입력해주세요.' })
  @ManyToMany(() => Player)
  redTeamPlayers: Player[];

  @IsNotEmpty({ message: '경기날짜를 입력해주세요.' })
  @Column({ nullable: false })
  matchDate: Date;

  @IsNotEmpty({ message: '대회명을 입력해주세요.' })
  @ManyToMany(() => Tournament, (tournament) => tournament.match)
  tournament: Tournament;

  @IsNotEmpty({ message: '라운드를 입력해주세요.' })
  @Column({ nullable: false })
  round: string;

  @Column({ nullable: true })
  score: number;

  @Column({ nullable: true })
  thumbnail: string;

  @Column({ nullable: true })
  videoLink: string;
}
