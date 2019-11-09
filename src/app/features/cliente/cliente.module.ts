import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteListComponent } from './cliente-list/list-component.component';
import { ClienteRoutingModule } from './cliente.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ClienteListComponent],
  imports: [CommonModule, ClienteRoutingModule],
  exports: [RouterModule]
})
export class ClienteModule {}
