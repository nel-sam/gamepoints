import { Component, OnInit, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { HighlightDelayBarrier } from 'blocking-proxy/built/lib/highlight_delay_barrier';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {
  @Input() playerName: string;
  // @Output() points: Observable<number>;
  public points = 0;
  public wasTapped = false;

  constructor() {
  }

  ngOnInit() {
  }

  incrementPoints(): void {
    this.points++;
    this.highlight();
  }

  decrementPoints(): void {
    this.points--;
    this.highlight();
  }

  private highlight() {
    this.wasTapped = true;

    setTimeout(() => {
      this.wasTapped = false;
    }, 6000);
  }
}
