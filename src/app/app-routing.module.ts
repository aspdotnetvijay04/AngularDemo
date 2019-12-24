import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CLCHComponent } from './clch/clch.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { CandeactivateserviceService } from './candeactivateservice.service';

const routes: Routes = [
  { path: 'home', component: CLCHComponent },
  { path: 'create', component: ReactiveformComponent,canDeactivate:[CandeactivateserviceService] },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
  //{ path: '**', component: CLCHComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
