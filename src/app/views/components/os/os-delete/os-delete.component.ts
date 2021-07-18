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
  selector: 'app-os-delete',
  templateUrl: './os-delete.component.html',
  styleUrls: ['./os-delete.component.css']
})
export class OsDeleteComponent implements OnInit {

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

  exameL: OsExame = {
    id :  '',
    exame_id:'',
    os_id:''
  }


  medicos      : Medico[] = []
  pacientes    : Paciente[] = []
  postocoletas : PostoColeta[] = []
  exames       : Exame[] = []

  


  constructor(private medicoservice:MedicoService,
    private pacienteservice:PacienteService,
    private postocoletaservice:PostocoletaService,
    private exameservice:ExameService,
    private osservice:OsService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.os.id = this.route.snapshot.paramMap.get('id');

    this.findByid();
    this.listarPacientes();
    this.listarMedicos();
    this.listarPostosColeta();
    this.listarExames();
  }

  update():void{
    this.osservice.update(this.os).subscribe(resposta => {
      this.osservice.message("Ordem de Serviço Atualizada com sucesso!")
      this.router.navigate(['os'])
    })
  }

  findByid():void{
    this.osservice.findById(this.os.id).subscribe(resposta =>{
      this.os = resposta;
      
      this.selMedico = resposta.medico.toString();
      this.selPaciente = resposta.paciente.toString();
      this.selPostoColeta = resposta.postocoleta.toString();
      
    })
  }

  delete():void{
    this.osservice.delete(this.os.id).subscribe(resposta => {
      this.router.navigate(['os']);
      this.osservice.message('Registro Excluido com Sucesso!');
    },err =>{
      console.log(err);
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

  
  cancel():void{
    this.router.navigate(['os'])
  }
}

