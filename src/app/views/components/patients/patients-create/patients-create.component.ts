import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OsService } from 'src/app/services/os.service';

@Component({
  selector: 'app-patients-create',
  templateUrl: './patients-create.component.html',
  styleUrls: ['./patients-create.component.css']
})
export class PatientsCreateComponent implements OnInit {
  
  formulario:any
  

  constructor(private formBuilder:FormBuilder,
              private http : HttpClient,
              private osservice:OsService ) { }

  ngOnInit(): void {
    /*this.formulario = new FormGroup({
      nome:new FormControl(null),
      endereco:new FormControl(null)
    });*/
    /*this.formulario = new FormGroup({
      nome:new FormControl(null),
      endereco:new FormControl(null)
    });*/
    
 
    this.formulario = this.formBuilder.group({
      nome:[null,Validators.required,Validators.minLength(3),Validators.maxLength(500)],
      dataNasc:[null],
      sexo:[null],
      email:[null,[Validators.required,Validators.email]],
      endereco:[null,Validators.required]
    })

    console.log('no pac create'+this.formulario.value);
  }

  onSubmit(){
    console.log("formulario no submit this.formulario.:"+this.formulario.get('email').errors.email)
    this.osservice.createPatiente(this.formulario).subscribe(resposta => {
      console.log(resposta);  
       //reseta o form
      this.resetar();
    },erro => {
      
      console.log('erro'+erro)
    })
   
  }

  resetar(){
    this.formulario.reset();
  }

  validaNome(){
    if(this.formulario.get('nome').valid == false){
      return 'O Nome não pode ser vazio'
    }
    return false;
  }

  validaEmail(){
    

    if(this.formulario.get('email').valid == false){
      return 'O Email não pode ser vazio'
    }

    return false;
  }
}
