import { PickType } from '@nestjs/swagger';
import { Comment } from '../comment.entity';

export class CreateCommentDto extends PickType(Comment, ['content', 'score']) {
  content: string;
  matchId: number;
  userId: number;
}
