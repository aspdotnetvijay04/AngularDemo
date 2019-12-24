import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmpserviceService } from './empservice.service';
import { CreateEmpComponent } from './create-emp/create-emp.component';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CLCHComponent } from './clch/clch.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    CreateEmpComponent,
    CLCHComponent,
    ReactiveformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ReactiveFormsModule
  ],
  providers: [EmpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
