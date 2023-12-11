import { CommonEntity } from 'src/common/entities/common.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'tournament' })
export class Tournament extends CommonEntity {
  @Column({ nullable: false })
  abbreviation: string;

  @Column({ nullable: false })
  fullname: string;
}
