import { FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from './template-form.component';
import { CampoControlErroComponent } from '../../campo-control-erro/campo-control-erro/campo-control-erro.component';



@NgModule({
  declarations: [
    TemplateFormComponent,
    CampoControlErroComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
})
export class TemplateFormModule { }
