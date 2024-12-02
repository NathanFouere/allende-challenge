import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm';
import type { BelongsTo } from '@adonisjs/lucid/types/relations';
import type { PoliticalAffiliation } from '@shared/types/political-party/political_affiliation.js';
import Game from '#game/domain/models/game';

export default class PoliticalParty extends BaseModel {
  @column({ isPrimary: true })
  declare id: number;

  @column()
  declare name: string;

  @column()
  declare description: string;

  @column()
  declare color: string;

  @column()
  declare affiliation: PoliticalAffiliation;

  @column({ serializeAs: null })
  declare gameId: number;

  @belongsTo(() => Game)
  declare game: BelongsTo<typeof Game>;
}
