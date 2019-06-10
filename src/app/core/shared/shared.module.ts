import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatIconModule, MatGridListModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
  ],
  exports: [
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
  ]
})
export class SharedModule { }
