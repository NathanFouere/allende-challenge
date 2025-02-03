import type { MinimalLawDto } from '@shared/legislature/minimal-law-dto.js';
import type { ChartDataDTO } from '@shared/chart/ChartDataDTO.js';

export interface LawDto extends MinimalLawDto {
  id: number;
  name: string;
  description: string;
  voted: boolean;
  madeIncompatibleBy: string | undefined;
  alreadyVotedForThisTurn: boolean;
  superiorToAvailablePoliticalWeight: boolean;
  politicalWeightRequired: number;
  voteResultsDatas: VoteResultsData[];
}

export interface VoteResultsData {
  votesInParliament: ChartDataDTO;
  votesInSenate: ChartDataDTO;
  turnOfVotes: number;
  votePassed: boolean;
}
