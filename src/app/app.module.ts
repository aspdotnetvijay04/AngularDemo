import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmpserviceService } from './empservice.service';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { CandeactivateserviceService } from './candeactivateservice.service';
import { DisplaydetailComponent } from './displaydetail/displaydetail.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ReactiveformComponent,
    DisplaydetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ReactiveFormsModule
  ],
  providers: [EmpserviceService,CandeactivateserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
