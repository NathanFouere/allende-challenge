import type { HttpContext } from '@adonisjs/core/http';
import { inject } from '@adonisjs/core';
import type User from '#models/user/user';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import DeleteGameService from '#services/game/delete_game_service';

@inject()
export default class DeleteGameController {
  constructor(private deleteGameService: DeleteGameService) {}

  async deleteGame({ auth, params, response }: HttpContext) {
    try {
      const user: User = auth.getUserOrFail();
      const gameId = Number(params.id);
      await this.deleteGameService.deleteGame(user, gameId);
    }
    catch (error) {
      console.error(error);
      return response.internalServerError({
        message: 'Something went wrong',
        error,
      });
    }
    return response.ok({ message: 'Game deleted successfully' });
  }
}
