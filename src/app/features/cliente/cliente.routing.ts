import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteListComponent } from './cliente-list/list-component.component';

const routes: Routes = [
  {
    path: 'cliente',
    children: [
      {
        path: 'list',
        component: ClienteListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule {}
