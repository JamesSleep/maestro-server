import { CommonEntity } from 'src/common/entities/common.entity';
import { Match } from 'src/match/match.entity';
import { Column, Entity, ManyToMany } from 'typeorm';

@Entity({ name: 'tournament' })
export class Tournament extends CommonEntity {
  @ManyToMany(() => Match, (match) => match.tournament)
  match: Tournament;

  @Column({ nullable: false })
  abbreviation: string;

  @Column({ nullable: false })
  fullname: string;
}
