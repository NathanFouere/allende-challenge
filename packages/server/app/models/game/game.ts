import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm';
import type { DateTime } from 'luxon';
import type { BelongsTo } from '@adonisjs/lucid/types/relations';
import User from '#models/user/user';

export default class Game extends BaseModel {
  @column({ isPrimary: true })
  declare id: number;

  @column()
  declare turnNumber: number;

  @column({ serializeAs: null })
  declare userId: number;

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>;

  @column.dateTime({ autoCreate: true, serializeAs: null })
  declare createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  declare updatedAt: DateTime | null;
}
