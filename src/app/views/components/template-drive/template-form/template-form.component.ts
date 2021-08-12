import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Estado } from 'src/app/models/estado';
import { ConsultaCepService } from 'src/app/services/consulta-cep.service';
import { EstadoService } from 'src/app/services/estado.service';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  
  estados : Estado[] = [];

  usuario:any = {
    nome:null,
    email:null
  }
  constructor(private http: HttpClient,
              private cepService:ConsultaCepService,
              private estadoService: EstadoService) { }

  ngOnInit(): void {
    this.estadoService.getEstadosBr().subscribe(dados =>{
      this.estados = dados;
      console.log(" estados.:"+JSON.stringify(dados))
    })
  }
  onSubmit(form:any){
    console.log(form);
    console.log(this.usuario);

    this.http.post('http://httpbin.org/post',JSON.stringify(form.value)).subscribe(
      dadaos => console.log(dadaos)
    );
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

    if(cep !== "" && cep != null){
      console.log(" aquiiii 1");
      var validacep = /^[0-9]{8}$/;

      //if(validacep.test(cep)){
        console.log(" aquiiii 2");
          this.cepService.ConsultaCep(cep)
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
