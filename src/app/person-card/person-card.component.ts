import { Component, OnInit, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {
  @Input() playerName: string;
  @Output() points: Observable<number>;

  constructor() {
  }

  ngOnInit() {
  }

}
