import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { merge } from 'rxjs/internal/observable/merge';
import { Exame } from 'src/app/models/exame';
import { Medico } from 'src/app/models/medico';
import { OS } from 'src/app/models/os';
import { OsExame } from 'src/app/models/osexame';
import { Paciente } from 'src/app/models/paciente';
import { PostoColeta } from 'src/app/models/postocoleta';
import { ExameService } from 'src/app/services/exame.service';
import { MedicoService } from 'src/app/services/medico.service';
import { OsService } from 'src/app/services/os.service';
import { PacienteService } from 'src/app/services/paciente.service';
import { PostocoletaService } from 'src/app/services/postocoleta.service';

@Component({
  selector: 'app-os-create',
  templateUrl: './os-create.component.html',
  styleUrls: ['./os-create.component.css']
})
export class OsCreateComponent implements OnInit {

  os: OS = {
    medico:'',
    paciente:'',
    postocoleta:'',
    data:'',
    convenio:''
  }

  objExames: OsExame = {
      id:'',
      exame:'',
      os:''
  }

  exameL: OsExame[] = []

  

  medicos      : Medico[] = []
  pacientes    : Paciente[] = []
  postocoletas : PostoColeta[] = []
  exames       : Exame[] = []

  convenio = new FormControl('',Validators.required);
  medico = new FormControl('',Validators.required);
  paciente = new FormControl('',Validators.required);
  postocoleta = new FormControl('',Validators.required);
  examesList = new FormControl();

  constructor(private medicoservice:MedicoService,
              private pacienteservice:PacienteService,
              private postocoletaservice:PostocoletaService,
              private exameservice:ExameService,
              private osservice:OsService,
              private router:Router) { }

  ngOnInit(): void {

    this.listarPacientes();
    this.listarMedicos();
    this.listarPostosColeta();
    this.listarExames();
  }

  create():void{
    
    
    this.osservice.create(this.os).subscribe(resposta => {
      //this.osservice.message("Ordem de Serviço Criada com sucesso!")
      this.exames.map(checkbox => checkbox.id).filter(checkbox => checkbox.checked == true);
      console.log(this.exames);
      this.exames.forEach(element => {
        if(element.checked){
          this.objExames.exame = element.id
          console.log(this.objExames);
          this.osservice.createOsExame(this.objExames).subscribe(resp => {
            this.osservice.message("Ordem de Serviço Criada com sucesso!")
            this.router.navigate(['os'])
          })
        }
      }); 
    });
  }

  FindOsLastId(){
    this.osservice.FindOsLastId().subscribe(resposta =>{
      this.os = resposta;
      console.log(" no find .:"+this.os.convenio)
      return this.os.id
    })
  }

  listarPacientes():void{
    this.pacienteservice.findAll().subscribe(resposta => {
        this.pacientes = resposta;
    })
  }

  listarMedicos():void{
    this.medicoservice.findAll().subscribe(resposta => {
        this.medicos = resposta;
    })
  }

  listarPostosColeta():void{
    this.postocoletaservice.findAll().subscribe(resposta => {
        this.postocoletas = resposta;
    })
  }

  listarExames():void{
    this.exameservice.examefindAll().subscribe(resposta => {
      this.exames = resposta;
    })
  }

  validaConvenio(){
    if(this.convenio.invalid){
      return 'O convênio não pode ser vazio'
    }
    return false;
  }

  validaMedico(){
    if(this.medico.invalid){
      return 'O Médico não pode ser vazio'
    }
    return false;
  }

  validaPaciente(){
    if(this.paciente.invalid){
      return 'O Paciente não pode ser vazio'
    }
    return false;
  }

  validaPostoColeta(){
    if(this.postocoleta.invalid){
      return 'O Posto Coleta não pode ser vazio'
    }
    return false;
  }

  cancel():void{
    this.router.navigate(['os'])
  }
}
