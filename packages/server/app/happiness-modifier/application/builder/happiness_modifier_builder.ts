import type { HappinessModifierType } from '@shared/dist/common/happiness-modifier-type.js';

export abstract class HappinessModifierBuilder {
  protected name: string | null = null;
  protected description: string | null = null;
  protected color: string | null = null;
  protected type: HappinessModifierType | null = null;
  protected duration: number | null = null;
  protected amount: number | null = null;

  public withName(name: string): this {
    this.name = name;
    return this;
  }

  public withDescription(description: string): this {
    this.description = description;
    return this;
  }

  public withColor(color: string): this {
    this.color = color;
    return this;
  }

  public withType(type: HappinessModifierType): this {
    this.type = type;
    return this;
  }

  public withDuration(duration: number): this {
    this.duration = duration;
    return this;
  }

  public withAmount(amount: number): this {
    this.amount = amount;
    return this;
  }
}
