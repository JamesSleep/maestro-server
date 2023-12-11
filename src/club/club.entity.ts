import { CommonEntity } from 'src/common/entities/common.entity';
import { Match } from 'src/match/match.entity';
import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';

@Entity({ name: 'club' })
export class Club extends CommonEntity {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  birthYear: string;

  @Column({ nullable: true })
  icon: string;
}
