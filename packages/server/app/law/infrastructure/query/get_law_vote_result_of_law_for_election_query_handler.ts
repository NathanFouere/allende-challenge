import LawVoteResults from '#law/domain/model/law_vote_results';
import type GetLawVoteResultOfLawForElectionQuery
  from '#law/application/query/get_law_vote_result_of_law_for_turn_query';
import type {
  IGetLegislatureVoteResultOfLawForElectionQueryHandler,
} from '#law/application/query/i_get_law_vote_result_of_law_for_election_query_handler';

export default class GetLegislatureVoteResultOfLawForElectionQueryHandler implements IGetLegislatureVoteResultOfLawForElectionQueryHandler {
  public async handle(getLawVoteResultOfLawForElectionQuery: GetLawVoteResultOfLawForElectionQuery): Promise<LawVoteResults> {
    return await LawVoteResults
      .query()
      .where('law_id', getLawVoteResultOfLawForElectionQuery.lawId)
      .where('turn', getLawVoteResultOfLawForElectionQuery.turn)
      .where('legislature_type', getLawVoteResultOfLawForElectionQuery.legislatureType)
      .preload('politicalPartiesVoteResults')
      .firstOrFail();
  };
}
