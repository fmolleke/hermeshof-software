import { Component } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
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
        label: 'Test',
        link: '/dashboard'
      }
    ];
  }
}
