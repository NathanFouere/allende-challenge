import { Container } from 'inversify';
import { AuthPresenter } from '../presenters/auth.presenter';
import { COMMON_DEPENDANCY_TYPES } from './common.types';

const container = new Container();

container.bind<AuthPresenter>(COMMON_DEPENDANCY_TYPES.AuthPresenter).to(AuthPresenter);

export default container;
