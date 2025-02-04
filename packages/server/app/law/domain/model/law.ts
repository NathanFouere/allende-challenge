import { BaseModel, column, belongsTo, hasMany } from '@adonisjs/lucid/orm';
import type { DateTime } from 'luxon';
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations';
import Game from '#game/domain/models/game';
import LawGroup from '#law/domain/model/law_group';
import LawVotesPercentagePerPoliticalParty from '#law/domain/model/law_votes_percentage_per_political_party';
import LawVote from '#law/domain/model/law_vote';

export default class Law extends BaseModel {
  @column({ isPrimary: true })
  declare id: number;

  @column()
  declare lawGroupId: number;

  @belongsTo(() => LawGroup)
  declare lawGroup: BelongsTo<typeof LawGroup>;

  @column()
  declare name: string;

  @column()
  declare description: string;

  @column()
  declare politicalWeightRequired: number;

  @column()
  declare gameId: number;

  @belongsTo(() => Game)
  declare game: BelongsTo<typeof Game>;

  @column()
  declare voted: boolean;

  @column()
  declare order: number;

  @hasMany(() => LawVotesPercentagePerPoliticalParty)
  declare percentagesOfVotesForPoliticalParty: HasMany<typeof LawVotesPercentagePerPoliticalParty>;

  @hasMany(() => LawVote)
  declare lawVotes: HasMany<typeof LawVote>;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null;

  public setVoted(): void {
    this.voted = true;
  }

  public setUnvoted(): void {
    this.voted = false;
  }

  public isVoted(): boolean {
    return this.voted;
  }
}
