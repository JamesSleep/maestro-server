import { CommonEntity } from 'src/common/entities/common.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'club' })
export class Club extends CommonEntity {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  birthYear: number;

  @Column({ nullable: true })
  icon: string;
}
