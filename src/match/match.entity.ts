import { IsNotEmpty, IsString } from 'class-validator';
import { Club } from 'src/club/club.entity';
import { Comment } from 'src/comment/comment.entity';
import { CommonEntity } from 'src/common/entities/common.entity';
import { Player } from 'src/player/player.entity';
import { Tournament } from 'src/tournament/tournament.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'match' })
export class Match extends CommonEntity {
  @OneToMany(() => Comment, (comment) => comment.match)
  comment: Comment;

  @IsNotEmpty({ message: '블루팀을 입력해주세요.' })
  @IsString()
  @Column({ nullable: false })
  blueTeam: string;

  @IsNotEmpty({ message: '레드팀을 입력해주세요.' })
  @IsString()
  @Column({ nullable: false })
  redTeam: string;

  @IsNotEmpty({ message: '블루팀 점수를 입력해주세요.' })
  @IsString()
  @Column({ nullable: false })
  blueTeamScore: number;

  @IsNotEmpty({ message: '레드팀 점수를 입력해주세요.' })
  @IsString()
  @Column({ nullable: false })
  redTeamScore: number;

  @IsNotEmpty({ message: '경기에 참가한 선수들을 입력해주세요.' })
  @ManyToMany(() => Player, { cascade: true })
  @JoinTable({
    name: 'match_players',
    joinColumn: { name: 'matchId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'playerId', referencedColumnName: 'id' },
  })
  players: Player[];

  @IsNotEmpty({ message: '경기날짜를 입력해주세요.' })
  @Column({ nullable: false })
  matchDate: Date;

  @IsNotEmpty({ message: '대회명을 입력해주세요.' })
  @Column({ nullable: false })
  tournament: string;

  @IsNotEmpty({ message: '라운드를 입력해주세요.' })
  @Column({ nullable: false })
  round: string;

  @Column({ nullable: true })
  season: string;

  @Column({ nullable: true })
  score: number;

  @Column({ nullable: true })
  thumbnail: string;

  @Column({ nullable: true })
  poster: string;

  @Column({ nullable: true })
  videoLink: string;

  @Column({ nullable: true })
  tags: string;
}
