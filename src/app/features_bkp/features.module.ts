import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRouterModule } from './features.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeaturesRouterModule,
  ],
  exports: [
    RouterModule
  ]
})
export class FeaturesModule { }
