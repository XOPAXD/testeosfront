import { HttpClient } from '@angular/common/http';
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
  constructor(private http: HttpClient) { }

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

  ConsultaCep(cep:any,form:any){
    console.log("oi chegando.W "+cep.value);
    //cep = cep.replace(/\D/g,'');
    this.resetaDadosForm(form);

    if(cep != ""){
      console.log(" aquiiii 1");
      var validacep = /^[0-9]{8}$/;

      //if(validacep.test(cep)){
        console.log(" aquiiii 2");
          this.http.get(`//viacep.com.br/ws/${cep.value}/json/`)
          
          .subscribe(dados =>{
            console.log(" aquiiii"+JSON.stringify(dados));
            this.populaDadosForm(dados,form)
          });
      //}

     
    }
  }

  populaDadosForm(dados:any,form:any){
     /* form.setValue({
        nome:form.value.nome,
        email:form.value.email,
        endereco:{
          rua : dados.logradouro,
          cep : dados.cep,
          numero: '',
          complemento:dados.complemento,
          bairro:dados.bairro,
          cidade:dados.localidade,
          estado:dados.uf
        }
      })*/

      form.form.patchValue({
        endereco:{
          rua : dados.logradouro,
          cep : dados.cep,
          complemento:dados.complemento,
          bairro:dados.bairro,
          cidade:dados.localidade,
          estado:dados.uf
        }
      });
  }

  resetaDadosForm(form:any){
    form.form.patchValue({
      endereco:{
        rua : null,
        //cep : null,
        complemento:null,
        bairro:null,
        cidade:null,
        estado:null
      }
    });
  }
}
