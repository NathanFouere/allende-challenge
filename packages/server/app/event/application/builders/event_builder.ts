import Event from '#event/domain/models/event';

export class EventBuilder {
  private identifier: string | null = null;
  private text: string | null = null;
  private title: string | null = null;
  private turn: number | null = null;
  private isAvailable: boolean | null = null;
  private gameId: number | null = null;

  public withIdentifier(identifier: string): this {
    this.identifier = identifier;
    return this;
  }

  public withTitle(title: string): this {
    this.title = title;
    return this;
  }

  public withGameId(gameId: number): this {
    this.gameId = gameId;
    return this;
  }

  public withText(text: string): this {
    this.text = text;
    return this;
  }

  public withTurn(turn: number): this {
    this.turn = turn;
    return this;
  }

  public withIsAvailable(isAvailable: boolean): this {
    this.isAvailable = isAvailable;
    return this;
  }

  public async exists(): Promise<Event> {
    const event = new Event();
    if (this.identifier !== null) {
      event.identifier = this.identifier;
    }
    else {
      throw new Error('identifier is required');
    }
    if (this.gameId !== null) {
      event.gameId = this.gameId;
    }
    else {
      throw new Error('gameId is required');
    }
    if (this.text !== null) {
      event.text = this.text;
    }
    else {
      throw new Error('text is required');
    }
    if (this.turn !== null) {
      event.turn = this.turn;
    }
    else {
      throw new Error('turn is required');
    }
    if (this.isAvailable !== null) {
      event.isAvailable = this.isAvailable;
    }
    else {
      throw new Error('isAvailable is required');
    }
    if (this.title !== null) {
      event.title = this.title;
    }
    else {
      throw new Error('title is required');
    }
    return event;
  }
}

export function anEvent(): EventBuilder {
  return new EventBuilder();
}
