import type { MinimalSocialClassDto } from '@shared/dist/social-class/minimal-social-class-dto.js';
import { inject } from '@adonisjs/core';
import type SocialClass from '#social-class/domain/models/social_class';

@inject()
export class MinimalSocialClassDtoFactory {
  public createFromSocialClass(socialClass: SocialClass): MinimalSocialClassDto {
    return {
      id: socialClass.id,
      name: socialClass.name,
      description: socialClass.description,
      color: socialClass.color,
      socialClassType: socialClass.subType,
      licensedFile: socialClass.licensedFiles[0],
    };
  }

  public createFromSocialClasses(socialClasses: SocialClass[]): MinimalSocialClassDto[] {
    return socialClasses.map(socialClass => this.createFromSocialClass(socialClass),
    );
  }
}
