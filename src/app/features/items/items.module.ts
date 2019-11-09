import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemsRoutingModule } from './items.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ItemsListComponent],
  imports: [CommonModule, ItemsRoutingModule],
  exports: [RouterModule]
})
export class ItemsModule {}
