import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/components/home/home.component';
import { OsReadComponent } from './views/components/os/os-read/os-read.component';
import { OsCreateComponent } from './views/components/os/os-create/os-create.component';
import { OsUpdateComponent } from './views/components/os/os-update/os-update.component';
import { OsDeleteComponent } from './views/components/os/os-delete/os-delete.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'os',
    component: OsReadComponent
  },
  {
    path: 'os/create',
    component: OsCreateComponent 
  },
  {
    path: 'os/update/:id',
    component: OsUpdateComponent 
  },
  {
    path: 'os/delete/:id',
    component: OsDeleteComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }