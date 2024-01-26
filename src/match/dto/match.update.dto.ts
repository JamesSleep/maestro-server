import { PickType } from '@nestjs/swagger';
import { Match } from '../match.entity';

export class UpdateMatchDto extends PickType(Match, [
  'matchDate',
  'blueTeam',
  'redTeam',
  'round',
  'tournament',
  'score',
]) {}

export class LikeMatchDto {
  matchId: number;
  userId: number;
}
