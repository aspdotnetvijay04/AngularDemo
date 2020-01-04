import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { CandeactivateserviceService } from './candeactivateservice.service';
import { EmployeeComponent } from './employee/employee.component';
import { DisplaydetailComponent } from './displaydetail/displaydetail.component';

const routes: Routes = [
  { path: 'home', component: EmployeeComponent },
  //{ path: 'home/:id', component: EmployeeComponent },
  { path: 'details/:id', component: DisplaydetailComponent },
  { path: 'create', component: ReactiveformComponent,canDeactivate:[CandeactivateserviceService] },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
  //{ path: '**', component: CLCHComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
