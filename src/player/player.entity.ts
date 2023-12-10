import { CommonEntity } from 'src/common/entities/common.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'player' })
export class Player extends CommonEntity {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true })
  birth: string;

  @Column({ nullable: true })
  picture: string;
}
