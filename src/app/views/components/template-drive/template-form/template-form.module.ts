import { FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from './template-form.component';
import { CampoControlErroComponent } from '../../campo-control-erro/campo-control-erro/campo-control-erro.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    TemplateFormComponent,
    CampoControlErroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
})
export class TemplateFormModule { }
