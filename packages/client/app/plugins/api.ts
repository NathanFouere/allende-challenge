import AuthModule from '../../server/repository/modules/auth.module';
import GameModule from '../../server/repository/modules/game.module';
import PoliticalPartyModule from '../../server/repository/modules/political-party.module';
import EventModule from '../../server/repository/modules/event.module';
import LegislatureModule from '../../server/repository/modules/legislature.module';
import SocialClassModule from '../../server/repository/modules/social-class.module';
import ProductModule from '../../server/repository/modules/product.module';

export interface IApiInstance {
  auth: AuthModule;
  game: GameModule;
  politicalParty: PoliticalPartyModule;
  event: EventModule;
  legislature: LegislatureModule;
  socialClass: SocialClassModule;
  product: ProductModule;
}

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const NUXT_BASE_URL_PROXY_SERVER: string = config.public.baseURLProxyServer;

  const apiFetcher = $fetch.create({
    baseURL: NUXT_BASE_URL_PROXY_SERVER,
  });

  const modules: IApiInstance = {
    auth: new AuthModule(apiFetcher),
    game: new GameModule(apiFetcher),
    politicalParty: new PoliticalPartyModule(apiFetcher),
    event: new EventModule(apiFetcher),
    legislature: new LegislatureModule(apiFetcher),
    socialClass: new SocialClassModule(apiFetcher),
    product: new ProductModule(apiFetcher),
  };

  return {
    provide: {
      api: modules,
    },
  };
});
