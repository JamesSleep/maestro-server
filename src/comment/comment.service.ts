import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './comment.entity';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/comment.create.dto';
import { Match } from 'src/match/match.entity';
import { User } from 'src/user/user.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
    @InjectRepository(Match)
    private matchRepository: Repository<Match>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll() {
    return await this.commentRepository.find();
  }

  async findAllByMatch(matchId: number) {
    return await this.commentRepository.find({
      where: { match: { id: matchId } },
      relations: ['match'],
    });
  }

  async create(body: CreateCommentDto) {
    const { content, score, matchId, userId } = body;
    const match = await this.matchRepository.findOne({
      where: { id: matchId },
      relations: ['user', 'comment', 'comment.user'],
    });
    const user = await this.userRepository.findOne({ where: { id: userId } });
    const isComment =
      match.comment.filter((_comment) => _comment.user.id === userId).length >
      0;

    if (isComment) {
      const comment = match.comment.filter(
        (_comment) => _comment.user.id === userId && _comment,
      )[0];
      if (content) {
        comment.content = content;
      } else {
        match.score =
          match.comment.length > 1
            ? (match.score - score) / (match.comment.length - 1)
            : null;
        match.comment = match.comment.filter(
          (_comment) => _comment.id !== comment.id,
        );
        comment.score = score;
        match.score =
          (match.score ? match.score : 0 + score) / (match.comment.length + 1);
        match.comment = [...match.comment, comment];
        await this.matchRepository.save(match);
      }
      return await this.commentRepository.save(comment);
    } else {
      let comment: Comment;
      if (content) {
        comment = await this.commentRepository.save({ content, user });
        match.comment = [...match.comment, comment];
        await this.matchRepository.save(match);
      } else {
        comment = await this.commentRepository.save({ score, user });
        match.score =
          (match.score ? match.score : 0 + score) / (match.comment.length + 1);
        match.comment = [...match.comment, comment];
        await this.matchRepository.save(match);
      }

      return comment;
    }
  }
}
