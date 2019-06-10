import { Component, OnInit, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {
  @Input() playerName: string;
  // @Output() points: Observable<number>;
  public points = 0;

  constructor() {
  }

  ngOnInit() {
  }

  incrementPoints(): void {
    this.points++;
  }

  decrementPoints(): void {
    this.points--;
  }
}
