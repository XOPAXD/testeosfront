import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import { HomeComponent } from './views/components/home/home.component';
import { HeaderComponent } from './views/components/template/header/header.component';
import { FooterComponent } from './views/components/template/footer/footer.component';
import { NavComponent } from './views/components/template/nav/nav.component';
import { OsReadComponent } from './views/components/os/os-read/os-read.component';
import { OsCreateComponent } from './views/components/os/os-create/os-create.component';
import { OsUpdateComponent } from './views/components/os/os-update/os-update.component';
import { OsDeleteComponent } from './views/components/os/os-delete/os-delete.component';
import { PatientsReadComponent } from './views/components/patients/patients-read/patients-read.component';
import { PatientsCreateComponent } from './views/components/patients/patients-create/patients-create.component';
import { PatientsUpdateComponent } from './views/components/patients/patients-update/patients-update.component';
import { PatientsDeleteComponent } from './views/components/patients/patients-delete/patients-delete.component'; 
import { MatNativeDateModule } from '@angular/material/core';
import { TemplateFormModule } from './views/components/template-drive/template-form/template-form.module';

//import { CampoControlErroComponent } from './views/components/campo-control-erro/campo-control-erro/campo-control-erro.component';
//import { CampoControlErroModule } from './views/components/campo-control-erro/campo-control-erro/campo-control-erro.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    OsReadComponent,
    OsCreateComponent,
    OsUpdateComponent,
    OsDeleteComponent,
    PatientsReadComponent,
    PatientsCreateComponent,
    PatientsUpdateComponent,
    PatientsDeleteComponent,
    //CampoControlErroComponent
  ],
  imports: [
    RouterModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatNativeDateModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatMenuModule,
    ReactiveFormsModule,
    TemplateFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
