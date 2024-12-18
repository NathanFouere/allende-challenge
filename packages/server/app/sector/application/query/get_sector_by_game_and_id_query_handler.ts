import Sector from '#sector/domain/model/sector';
import type { GetSectorByGameAndIdQuery } from '#sector/application/query/get_sector_by_game_and_id_query';

export class GetSectorByGameAndIdQueryHandler {
  public async handle(query: GetSectorByGameAndIdQuery): Promise<Sector> {
    return await Sector
      .query()
      .where('gameId', query.gameId)
      .where('id', query.sectorId)
      .preload('licensedFile')
      .preload('products')
      .preload('socialClasses')
      .firstOrFail();
  }
}
