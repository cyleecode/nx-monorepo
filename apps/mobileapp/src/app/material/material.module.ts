import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

const material = [CommonModule, MatButtonModule, MatGridListModule];

@NgModule({
  imports: [...material],
  exports: [...material]
})
export class MaterialModule {}
