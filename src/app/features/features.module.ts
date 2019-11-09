import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features.routing';
import { RouterModule } from '@angular/router';
import { ClienteModule } from './cliente/cliente.module';
import { ItemsModule } from './items/items.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, FeaturesRoutingModule, ClienteModule, ItemsModule],
  exports: [RouterModule]
})
export class FeaturesModule {}
