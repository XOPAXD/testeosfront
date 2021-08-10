import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/components/home/home.component';
import { OsReadComponent } from './views/components/os/os-read/os-read.component';
import { OsCreateComponent } from './views/components/os/os-create/os-create.component';
import { OsUpdateComponent } from './views/components/os/os-update/os-update.component';
import { OsDeleteComponent } from './views/components/os/os-delete/os-delete.component';
import { PatientsReadComponent } from './views/components/patients/patients-read/patients-read.component';
import { PatientsCreateComponent } from './views/components/patients/patients-create/patients-create.component';
import { PatientsUpdateComponent } from './views/components/patients/patients-update/patients-update.component';
import { PatientsDeleteComponent } from './views/components/patients/patients-delete/patients-delete.component'; 
import { TemplateFormComponent } from './views/components/template-drive/template-form/template-form.component';
import { CampoControlErroComponent } from './views/components/campo-control-erro/campo-control-erro/campo-control-erro.component';

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
  {
    path: 'patients',
    component: PatientsReadComponent
  },
  {
    path: 'patients/create',
    component: PatientsCreateComponent
  },
  {
    path: 'template-drive',
    component: TemplateFormComponent
  },
  {
    path: 'campo-control',
    component: CampoControlErroComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }