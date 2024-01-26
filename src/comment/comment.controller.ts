import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { CommentService } from './comment.service';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CreateCommentDto } from './dto/comment.create.dto';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createComment(@Body() body: CreateCommentDto) {
    return await this.commentService.create(body);
  }
}
