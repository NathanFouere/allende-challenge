import type PoliticalParty from '#political-party/domain/models/political_party';
import type GetPoliticalPartiesOfGameQuery from '#political-party/application/queries/get_political_parties_of_game_query';

export default abstract class IGetPoliticalPartiesOfGameQueryHandler {
  public abstract handle(query: GetPoliticalPartiesOfGameQuery): Promise<PoliticalParty[]>;
}
