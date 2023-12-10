import { IsNotEmpty } from 'class-validator';
import { CommonEntity } from 'src/common/entities/common.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'match' })
export class Match extends CommonEntity {
  @IsNotEmpty({ message: '블루팀을 입력해주세요.' })
  @Column({ nullable: false })
  blueTeam: string;

  @IsNotEmpty({ message: '레드팀을 입력해주세요.' })
  @Column({ nullable: false })
  redTeam: string;

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
  score: number;
}
