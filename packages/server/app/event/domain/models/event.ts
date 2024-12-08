import { BaseModel, belongsTo, column, manyToMany } from '@adonisjs/lucid/orm';
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations';
import LicensedFile from '#licensed-file/domain/models/licensed_file';
import Game from '#game/domain/models/game';

export default class Event extends BaseModel {
  @column({ isPrimary: true, serializeAs: null })
  declare id: number;

  @column()
  declare identifier: string;

  @column()
  declare title: string;

  @column()
  declare text: string;

  @column()
  declare turn: number;

  @column()
  declare isAvailable: boolean;

  @column()
  declare beenRead: boolean;

  @manyToMany(() => LicensedFile, {
    pivotTable: 'event_licensed_file',
    pivotForeignKey: 'event_id',
    pivotRelatedForeignKey: 'licensed_file_identifier',
    localKey: 'id',
    relatedKey: 'identifier',
  })
  declare licensedFiles: ManyToMany<typeof LicensedFile>;

  @column({ serializeAs: null })
  declare gameId: number;

  @belongsTo(() => Game)
  declare game: BelongsTo<typeof Game>;
}
