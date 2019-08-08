import { Injectable } from '@angular/core';
import { PlayersStore } from './players.store';
import { Player } from './player.model';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { PlayersState } from './players.state';

@Injectable({
providedIn: 'root'
})
export class PlayersQuery extends QueryEntity<PlayersState, Player> {
    constructor(protected store: PlayersStore) {
        super(store);
    }

    getPlayers(): Observable<Player[]> {
        return this.selectAll();
    }
}