import { AfterContentInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  selector: 'app-os-update',
  templateUrl: './os-update.component.html',
  styleUrls: ['./os-update.component.css']
})
export class OsUpdateComponent implements AfterContentInit {

  selMedico = '';
  selPaciente = '';
  selPostoColeta = '';

  os: OS = {
    medico:'',
    paciente:'',
    postocoleta:'',
    data:'',
    convenio:''
  }

  objExamesUpd: OsExame = {
    id:'',
    exame:'',
    os:''
  }

  objExames: OsExame[] = []


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
    private router:Router,
    private route:ActivatedRoute) { }

  ngAfterContentInit(): void {
    this.os.id = this.route.snapshot.paramMap.get('id');

    this.ListarExamesOs();
    this.findByid();
    this.listarPacientes();
    this.listarMedicos();
    this.listarPostosColeta();
    this.listarExames();
    
  }

  update():void{
    this.osservice.update(this.os).subscribe(resposta => {
      this.exames.map(checkbox => checkbox.id).filter(checkbox => checkbox.checked == true);
      //console.log(this.exames);
      this.exames.forEach(element => {
        if(element.checked){
          this.objExamesUpd.exame = element.id
          this.objExamesUpd.os    = this.os.id
         // console.log(this.objExames);
          this.osservice.updOsExame(this.objExamesUpd).subscribe(resp => {
            this.osservice.message("Ordem de Serviço Atualizada com sucesso!")
            this.router.navigate(['os'])
          })
        }
      }); 
    });
  }

  findByid():void{
    this.osservice.findById(this.os.id).subscribe(resposta =>{
      this.os = resposta;
      
      this.selMedico = resposta.medico.toString();
      this.selPaciente = resposta.paciente.toString();
      this.selPostoColeta = resposta.postocoleta.toString();
      
    })
  }

  ListarExamesOs():void{
    this.osservice.getAllExamesByOsId(this.os.id).subscribe(resposta => {
      this.objExames = resposta;   
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

      this.exames.forEach(element =>{
        this.objExames.forEach(x => {
          
          if(element.id == x.exame){
            element.checked = true
          }
        })
      })
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
