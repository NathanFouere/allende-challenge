import type Event from '#event/domain/models/event';

export default abstract class IEventRepository {
  public abstract save(event: Event): Promise<void>;
  public abstract findById(eventId: number): Promise<Event | null>;
  public abstract saveWithLicensedFiles(event: Event, licensedFilesIdentifiers: string[]): Promise<void>;
  public abstract delete(event: Event): Promise<void>;
}
