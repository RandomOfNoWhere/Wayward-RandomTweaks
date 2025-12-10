import { Game } from "@wayward/game/game/Game";
import Mod from "@wayward/game/mod/Mod";
export default class RandomTweaks extends Mod {
    static readonly INSTANCE: RandomTweaks;
    onGameStart(game: Game, isLoadingSave: boolean, playedCount: number): void;
}
