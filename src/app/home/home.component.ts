import { Component, OnInit } from '@angular/core';
import { Player } from '../models/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public players: Player[] = [
    {
      name: 'Ty',
      points: 0
    } as Player,
    {
      name: 'Nelson',
      points: 0
    } as Player,
    {
      name: 'Denis',
      points: 0
    } as Player
  ] as Player[];

  constructor() {
  }

  ngOnInit() {
  }

}
