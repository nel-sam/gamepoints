import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    MatIconModule,
    MatCardModule,
    MatButtonModule,
  ]
})
export class SharedModule { }
