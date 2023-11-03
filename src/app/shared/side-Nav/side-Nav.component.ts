import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeComponent } from 'src/app/components/addEmployee/addEmployee.component';

@Component({
  selector: 'app-side-Nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent {
  isSidebarOpen: boolean = false;
  dialog=inject(MatDialog)
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
 
}
