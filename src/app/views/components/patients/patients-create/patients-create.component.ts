import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estado } from 'src/app/models/estado';

import { ValueTransformer } from '@angular/compiler/src/util';

import { OsService } from 'src/app/services/os.service';
import { EstadoService } from 'src/app/services/estado.service';
import { Cargo } from 'src/app/models/cargo';

@Component({
  selector: 'app-patients-create',
  templateUrl: './patients-create.component.html',
  styleUrls: ['./patients-create.component.css']
})
export class PatientsCreateComponent implements OnInit {
  
  formulario:any;
  form: FormGroup;

  estados : Estado[] = [];
  cargos : any[] = [];
  tecnologias : any[] = [];
  newsletter:any[] = [];
  frameworks: Array<any> = [
    { name: 'Pear', value: 'pear' },
    { name: 'Plum', value: 'plum' },
    { name: 'Kiwi', value: 'kiwi' },
    { name: 'Apple', value: 'apple' },
    { name: 'Lime', value: 'lime' }
  ];

  
  constructor(private formBuilder:FormBuilder,
              private http : HttpClient,
              private osservice:OsService,
              private estadoService: EstadoService,
              private fb: FormBuilder) {
                this.form = this.fb.group({
                  checkArray: this.fb.array([], [Validators.required])
                })
               }

  ngOnInit(): void {
    /*this.formulario = new FormGroup({
      nome:new FormControl(null),
      endereco:new FormControl(null)
    });*/
    /*this.formulario = new FormGroup({
      nome:new FormControl(null),
      endereco:new FormControl(null)
    });*/
    

    this.estadoService.getEstadosBr().subscribe(dados =>{
      this.estados = dados;
      //console.log(" estados.:"+JSON.stringify(dados))
    })

    this.cargos = this.estadoService.getCargos();
    this.tecnologias = this.estadoService.getTecnologias();
    this.newsletter = this.estadoService.getNewsLetter();
    this.frameworks = this.frameworks;

    this.formulario = this.formBuilder.group({
      nome:[null,Validators.required,Validators.minLength(3),Validators.maxLength(500)],
      dataNasc:[null],
      sexo:[null],
      email:[null,[Validators.required,Validators.email]],
      endereco:[null,Validators.required],
      estado: [null, Validators.required],
      cargo:null,
      tecnologia:null,
      newsletter:'n',
      termos:[null,Validators.pattern('true')],
      frameworks:Array([], [Validators.required])//this.buildFrameworks()
    })

    console.log('no pac create'+this.formulario.value);
  }

  onSubmit(){
    console.log(this.form.value)
    //console.log("formulario no submit this.formulario.:"+this.formulario.get('frameworks').value)
    this.frameworks.map(v => v ? this.frameworks : null ).filter(v => v !== null);
    console.log(" apos.."+this.frameworks)
    this.osservice.createPatiente(this.formulario).subscribe(resposta => {
      console.log(resposta);  
       //reseta o form
      this.resetar();
    },erro => {
      
      console.log('erro'+erro)
    })
   
  }

  onCheckboxChange(e:any) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  buildFrameworks(){
      const values  = this.frameworks.map(v => new FormControl(false));
      //console.log('values'+JSON.stringify(values))
      return this.formBuilder.array(values);
  }

  requiredMinCheckbox(min = 1){
   
    const validator = (formArray : FormArray) => {
        const values = formArray.controls;
        let totalChecked = 0

        for (let i = 0; i < values.length; i++) {
         if(values[i].value){
          console.log("to no min>>"+values[i].value)
           totalChecked +=1;
         } 
        }
        
        return totalChecked >= min ? null : {required : true}
    }

    return validator;
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

  validaTermos(){
    if(this.formulario.get('termos').valid == false){
      return 'Aceite os Termos'
    }
    return false;
  }

  setarCargo(){
    const cargo = { nome:'DevPleno',nivel:'Pleno',desc:'Desenvolvedor mais ou menos'};
    this.formulario.get('cargo').setValue(cargo.nome);
  }

  compararCargos(obj1:Cargo,obj2:Cargo){
      return obj1 && obj2 ? (obj1.nome === obj2.nome) : obj1 === obj2;
  }

  setarTecnologias(){
    this.formulario.get('tecnologia').setValue(['java','angular']);
  }
}
