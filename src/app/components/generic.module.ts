import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';
import { AddEmployeeComponent } from './addEmployee/addEmployee.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './notFound/notFound.component';


@NgModule({
  imports: [CommonModule, MatTableModule, MatToolbarModule, MatListModule, SharedModule, ReactiveFormsModule, FormsModule],
  declarations: [HomeComponent, NotFoundComponent, AboutComponent,ContactComponent, AddEmployeeComponent],
  exports:[HomeComponent, NotFoundComponent, AboutComponent, AddEmployeeComponent]
})
export class GenericModule { }
