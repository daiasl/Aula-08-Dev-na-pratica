import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html'
})
export class SideNavComponent implements OnInit {
  @Input() list;

  constructor() {}

  ngOnInit() {}
}
