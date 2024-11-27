import { Container } from 'inversify';
import { AuthPresenter } from '../app/presenters/auth.presenter';
import { GamePresenter } from '../app/presenters/game.presenter';
import { PoliticalPartyPresenter } from '../app/presenters/political-party.presenter';
import { COMMON_DEPENDANCY_TYPES } from './common.types';

const container = new Container();

container.bind<AuthPresenter>(COMMON_DEPENDANCY_TYPES.AuthPresenter).to(AuthPresenter);
container.bind<GamePresenter>(COMMON_DEPENDANCY_TYPES.GamePresenter).to(GamePresenter);
container.bind<PoliticalPartyPresenter>(COMMON_DEPENDANCY_TYPES.PoliticalPartyPresenter).to(PoliticalPartyPresenter);

export default container;
