import { CommonEntity } from 'src/common/entities/common.entity';
import { History } from 'src/history/history.entity';
import { Match } from 'src/match/match.entity';
import { User } from 'src/user/user.entity';
import { Winning } from 'src/winning/winning.entity';
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';

@Entity({ name: 'player' })
export class Player extends CommonEntity {
  @OneToMany(() => Winning, (winning) => winning.player)
  winning: Winning[];

  @OneToMany(() => History, (history) => history.player)
  history: History[];

  @ManyToMany(() => User, { cascade: true })
  @JoinTable({
    name: 'player_user_like',
    joinColumn: { name: 'playerId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'userId', referencedColumnName: 'id' },
  })
  user: User[];

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  realName: string;

  @Column({ nullable: true })
  birth: string;

  @Column({ nullable: true })
  picture: string;

  @Column({ nullable: true })
  mainProfile: string;
}
