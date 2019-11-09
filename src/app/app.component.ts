import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  items = [
    {
      label: 'Cliente',
      routerLink: '/clientes'
    },
    {
      label: 'Items',
      routerLink: '/items'
    }
  ];
}
