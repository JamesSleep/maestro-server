import { PickType } from '@nestjs/swagger';
import { Match } from '../match.entity';

export class CreateMatchDto extends PickType(Match, [
  'matchDate',
  'blueTeam',
  'redTeam',
  'round',
  'tournament',
]) {}
