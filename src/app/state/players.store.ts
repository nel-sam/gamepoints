import { Injectable } from '@angular/core';
import { StoreConfig, EntityStore } from '@datorama/akita';
import { PlayersState } from './players.state';
import { Player } from './player.model';

@Injectable({
    providedIn: 'root'
})
@StoreConfig({ name: 'players' })
export class PlayersStore extends EntityStore<PlayersState, Player> {
    constructor() {
        super();
    }
}
