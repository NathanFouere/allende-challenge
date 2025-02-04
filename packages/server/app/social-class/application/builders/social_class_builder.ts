import type { SocialClassTypes } from '@shared/dist/social-class/social-class-types.js';
import type { SocialClassSubtypes } from '@shared/dist/social-class/social-class-subtypes.js';
import SocialClass from '#social-class/domain/models/social_class';

export class SocialClassBuilder {
  private name: string | null = null;
  private description: string | null = null;
  private color: string | null = null;
  private economicalSituation: number | null = null;
  private subtype: SocialClassSubtypes | null = null;
  private type: SocialClassTypes | null = null;
  private gameId: number | null = null;
  private sectorId: number | null = null;

  withName(name: string): this {
    this.name = name;
    return this;
  }

  withDescription(description: string): this {
    this.description = description;
    return this;
  }

  withColor(color: string): this {
    this.color = color;
    return this;
  }

  withEconomicalSituation(economicalSituation: number): this {
    this.economicalSituation = economicalSituation;
    return this;
  }

  withType(socialClassType: SocialClassTypes): this {
    this.type = socialClassType;
    return this;
  }

  withSubtype(socialClassSubtypes: SocialClassSubtypes): this {
    this.subtype = socialClassSubtypes;
    return this;
  }

  withGameId(gameId: number): this {
    this.gameId = gameId;
    return this;
  }

  withSectorId(sectorId: number): this {
    this.sectorId = sectorId;
    return this;
  }

  build(): SocialClass {
    const socialClass = new SocialClass();
    if (this.name) socialClass.name = this.name;
    else throw new Error('Name is required');
    if (this.description) socialClass.description = this.description;
    else throw new Error('Description is required');
    if (this.color) socialClass.color = this.color;
    else throw new Error('Color is required');
    if (!this.economicalSituation) throw new Error('economical Situation is required');
    else socialClass.economicalSituation = this.economicalSituation;
    if (this.subtype) socialClass.subType = this.subtype;
    else throw new Error('Social class type is required');
    if (this.gameId) socialClass.gameId = this.gameId;
    else throw new Error('Game ID is required');
    if (this.sectorId) socialClass.sectorId = this.sectorId;
    else throw new Error('Sector ID is required');
    if (this.type) socialClass.type = this.type;
    else throw new Error('Type is required');
    return socialClass;
  }
}

export function aSocialClass(): SocialClassBuilder {
  return new SocialClassBuilder();
}
