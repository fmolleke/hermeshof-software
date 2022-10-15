import { MenuItem } from 'src/app/models/menu-item.model';

import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  menuItems: MenuItem[];

  constructor() {
    this.menuItems = [
      {
        label: 'Dashboard',
        link: '/dashboard'
      },
      {
        label: 'Stammdaten',
        link: '/stammdaten'
      }
    ];
  }
}
