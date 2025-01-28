import { BaseModel, belongsTo, column, manyToMany, hasMany, beforeSave } from '@adonisjs/lucid/orm';
import type { BelongsTo, ManyToMany, HasMany } from '@adonisjs/lucid/types/relations';
import type { DateTime } from 'luxon';
import type { SocialClassTypes } from '@shared/dist/social-class/social-class-types.js';
import type { SocialClassSubtypes } from '@shared/dist/social-class/social-class-subtypes.js';
import LicensedFile from '#licensed-file/domain/models/licensed_file';
import Game from '#game/domain/models/game';
import Sector from '#sector/domain/model/sector';
import SocialClassEconomicalSituationPerTurn
  from '#social-class/domain/models/social_class_economical_situation_per_turn';
import SocialClassHappinessPerTurn from '#social-class/domain/models/social_class_happiness_per_turn';
import SocialClassHappinessModifier from '#social-class/domain/models/social_class_happiness_modifier';
import StateTurnFinancialFlows from '#state/domain/model/state_turn_financial_flows';
import SocialClassTurnFinancialFlows from '#social-class/domain/models/social_class_turn_financial_flows';

export default class SocialClass extends BaseModel {
  @column({ isPrimary: true })
  declare id: number;

  @column()
  declare name: string;

  @column()
  declare description: string;

  @column()
  declare color: string;

  @column()
  declare economicalSituation: number;

  @column()
  declare type: SocialClassTypes;

  @column()
  declare subType: SocialClassSubtypes;

  @column()
  declare gameId: number;

  @belongsTo(() => Game)
  declare game: BelongsTo<typeof Game>;

  @hasMany(() => SocialClassTurnFinancialFlows)
  declare turnFinancialFlows: HasMany<typeof SocialClassTurnFinancialFlows>;

  @manyToMany(() => LicensedFile, {
    pivotTable: 'social_class_licensed_files',
    pivotForeignKey: 'social_class_id',
    pivotRelatedForeignKey: 'licensed_file_identifier',
    localKey: 'id',
    relatedKey: 'identifier',
  })
  declare licensedFiles: ManyToMany<typeof LicensedFile>;

  @hasMany(() => SocialClassEconomicalSituationPerTurn)
  declare economicalSituationPerTurn: HasMany<typeof SocialClassEconomicalSituationPerTurn>;

  @hasMany(() => SocialClassHappinessPerTurn)
  declare happinessPerTurn: HasMany<typeof SocialClassHappinessPerTurn>;

  @hasMany(() => SocialClassHappinessModifier)
  declare happinessModifiers: HasMany<typeof SocialClassHappinessModifier>;

  @column()
  declare sectorId: number;

  @belongsTo(() => Sector)
  declare sector: BelongsTo<typeof Sector>;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null;

  public getHappinessLevel(): number {
    const happinessLevel = this.happinessModifiers.reduce((acc, modifier) => acc + modifier.amount, 0);
    if (happinessLevel < 0) {
      return 0;
    }
    if (happinessLevel > 5) {
      return 5;
    }
    return happinessLevel;
  }

  @beforeSave()
  public static async validateEconomicalSituationLevel(socialClass: SocialClass) {
    if (socialClass.economicalSituation < 0 || socialClass.economicalSituation > 100) {
      throw new Error('Invalid economicalSituation level');
    }
  }

  public addEconomicalSituation(addedEconomicalSituation: number) {
    let newEconomicalSituation = this.economicalSituation + addedEconomicalSituation;
    if (newEconomicalSituation < 0) {
      newEconomicalSituation = 0;
    }
    if (newEconomicalSituation > 100) {
      newEconomicalSituation = 100;
    }
    this.economicalSituation = newEconomicalSituation;
  }
}
