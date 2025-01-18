import type {
  IGetLastLawVoteResultsInGameQueryHandler,
} from '#legislature/application/query/i_get_last_law_vote_results_in_game_query_handler';
import type GetLastLawVoteResultsInGameQuery from '#legislature/application/query/get_last_law_vote_results_in_game_query';
import LawVoteResults from '#legislature/domain/models/law_vote_results';

export default class GetLastLawVoteResultsInGameQueryHandler implements IGetLastLawVoteResultsInGameQueryHandler {
  public async handle(query: GetLastLawVoteResultsInGameQuery): Promise<LawVoteResults | null> {
    return await LawVoteResults
      .query()
      .where('law_id', query.lawId)
      .where('legislature_type', query.legislatureType)
      .orderBy('turn', 'desc')
      .preload('politicalPartiesVoteResults', (politicalPartiesVoteResultsQuery) => {
        politicalPartiesVoteResultsQuery.preload('politicalParty');
      })
      .first();
  }
}
