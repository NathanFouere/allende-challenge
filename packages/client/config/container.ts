import { Container } from 'inversify';
import { COMMON_DEPENDANCY_TYPES } from './common.types';
import { AuthPresenter } from '~/presenters/auth.presenter';
import { GamePresenter } from '~/presenters/game.presenter';
import { EventPresenter } from '~/presenters/events/event.presenter';
import { TurnInformationsPresenter } from '~/presenters/turn-informations/turn-informations.presenter';
import { ParliamentPresenter } from '~/presenters/legislation/parliament.presenter';
import { SenatePresenter } from '~/presenters/legislation/senate.presenter';
import { SocialClassesPresenter } from '~/presenters/social-class/social-classes.presenter';
import { SocialClassPresenter } from '~/presenters/social-class/social-class.presenter';
import { ProductPresenter } from '~/presenters/product/product.presenter';
import { ProductsPresenter } from '~/presenters/product/products.presenter';
import { SectorsPresenter } from '~/presenters/sector/sectors.presenter';
import { SectorPresenter } from '~/presenters/sector/sector.presenter';
import { StatePresenter } from '~/presenters/state/state.presenter';
import { PoliticalPartyPresenter } from '~/presenters/political-party/political-party.presenter';
import { PoliticalPartiesPresenter } from '~/presenters/political-party/political-parties.presenter';
import { LawCategoriesPresenter } from '~/presenters/legislation/law-categories.presenter';
import { LawPresenter } from '~/presenters/legislation/law.presenter';

const container = new Container();

container.bind<AuthPresenter>(COMMON_DEPENDANCY_TYPES.AuthPresenter).to(AuthPresenter);
container.bind<GamePresenter>(COMMON_DEPENDANCY_TYPES.GamePresenter).to(GamePresenter);
container.bind<PoliticalPartiesPresenter>(COMMON_DEPENDANCY_TYPES.PoliticalPartiesPresenter).to(PoliticalPartiesPresenter);
container.bind<PoliticalPartyPresenter>(COMMON_DEPENDANCY_TYPES.PoliticalPartyPresenter).to(PoliticalPartyPresenter);
container.bind<EventPresenter>(COMMON_DEPENDANCY_TYPES.EventPresenter).to(EventPresenter);
container.bind<TurnInformationsPresenter>(COMMON_DEPENDANCY_TYPES.TurnInformationsPresenter).to(TurnInformationsPresenter);
container.bind<SenatePresenter>(COMMON_DEPENDANCY_TYPES.SenatePresenter).to(SenatePresenter);
container.bind<ParliamentPresenter>(COMMON_DEPENDANCY_TYPES.ParliamentPresenter).to(ParliamentPresenter);
container.bind<SocialClassPresenter>(COMMON_DEPENDANCY_TYPES.SocialClassPresenter).to(SocialClassPresenter);
container.bind<SocialClassesPresenter>(COMMON_DEPENDANCY_TYPES.SocialClassesPresenter).to(SocialClassesPresenter);
container.bind<ProductPresenter>(COMMON_DEPENDANCY_TYPES.ProductPresenter).to(ProductPresenter);
container.bind<ProductsPresenter>(COMMON_DEPENDANCY_TYPES.ProductsPresenter).to(ProductsPresenter);
container.bind<SectorsPresenter>(COMMON_DEPENDANCY_TYPES.SectorsPresenter).to(SectorsPresenter);
container.bind<SectorPresenter>(COMMON_DEPENDANCY_TYPES.SectorPresenter).to(SectorPresenter);
container.bind<StatePresenter>(COMMON_DEPENDANCY_TYPES.StatePresenter).to(StatePresenter);
container.bind<LawCategoriesPresenter>(COMMON_DEPENDANCY_TYPES.LawCategoriesPresenter).to(LawCategoriesPresenter);
container.bind<LawPresenter>(COMMON_DEPENDANCY_TYPES.LawPresenter).to(LawPresenter);

export default container;
