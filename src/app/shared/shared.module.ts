import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from '../app-routing.module';
import { SideNavComponent } from './side-Nav/side-Nav.component';
import { TopNavComponent } from './top-Nav/top-Nav.component';
@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatMenuModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule, 
    MatTabsModule,
    MatIconModule,
    AppRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatPaginatorModule,
    FlexLayoutModule, 
    MatFormFieldModule,

  ],
  declarations: [SideNavComponent, TopNavComponent],
  exports: [
    SideNavComponent,
    TopNavComponent,
    MatTableModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatMenuModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule, // Add the MatToolbarModule
    MatTabsModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    FlexLayoutModule,
    MatFormFieldModule,
  ],
})
export class SharedModule { }
