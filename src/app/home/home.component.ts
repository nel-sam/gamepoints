import { Component, OnInit } from '@angular/core';
import { Player } from '../state/player.model';
import { Observable } from 'rxjs';
import { PlayersService } from '../state/players.service';
import { PlayersQuery } from '../state/players.query';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public userToAdd = '';

  public players$: Observable<Player[]>;

  constructor(
    private playersService: PlayersService,
    private playersQuery: PlayersQuery) {
    this.players$ = this.playersQuery.getPlayers();
  }

  ngOnInit() {
  }

  onAddButtonClick(): void {
    this.playersService.addPlayer({name: this.userToAdd});
    this.userToAdd = '';
  }

  trackByFn(index, player) {
    return player.id;
  }
}
