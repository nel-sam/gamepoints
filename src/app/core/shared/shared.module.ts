import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatIconModule, MatGridListModule, MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
  ],
  exports: [
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
  ]
})
export class SharedModule { }
