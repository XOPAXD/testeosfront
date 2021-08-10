import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  
  usuario:any = {
    nome:null,
    email:null
  }
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form:any){
    console.log(form);
    console.log(this.usuario);
  }

  VerificaValidtouched(campo:any){
      return !campo.valid && campo.touched
  }

  aplicaCssErro(campo:any){
    return{
      'has-error':this.VerificaValidtouched(campo),
      'class.has-feedback':this.VerificaValidtouched(campo)
    }
  }
}
