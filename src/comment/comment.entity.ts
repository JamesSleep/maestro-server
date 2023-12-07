import { CommonEntity } from 'src/common/entities/common.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'comment' })
export class Comment extends CommonEntity {
  @Column()
  content: string;
}
