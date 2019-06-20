import { Component, OnInit } from '@angular/core';
import { Player } from '../models/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public userToAdd = '';

  public players: Player[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  onAddButtonClick(): void {
    this.players.unshift({
      name: this.userToAdd,
      points: 0
    } as Player);

    this.userToAdd = '';
  }

}
