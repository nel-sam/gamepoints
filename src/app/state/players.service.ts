import { Injectable } from "@angular/core";
import { PlayersStore } from './players.store';
import { Player } from './player.model';
import { guid } from '@datorama/akita';

@Injectable({
    providedIn: 'root'
})
export class PlayersService {

    constructor(private playersStore: PlayersStore) {
    }

    addPlayer({ name }: Partial<Player>) {
        const player = {
            id: guid(),
            name,
            points: 0
        } as Player;

        this.playersStore.add(player);
    }
}
