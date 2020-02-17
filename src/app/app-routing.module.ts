import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemsComponent} from './items/items.component';
import {DashboardComponent} from './dashboard/dashboard.component';


const routes: Routes = [
    {path: '', redirectTo:'dashboard', pathMatch:'full'},
    {path: 'items', component: ItemsComponent},
    {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
