import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth_components/auth.module';
import { GenericModule } from './components/generic.module';
import { EmployeeService } from './services/employee.service';

import { GenericService } from 'src/utils/generic-service/generic.service';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GenericModule,
    SharedModule,
    AuthModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [GenericService, EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule { }
