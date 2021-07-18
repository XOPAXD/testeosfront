import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';


import { OS } from 'src/app/models/os';
import { MedicoService } from 'src/app/services/medico.service';
import { OsService } from 'src/app/services/os.service';
import { PacienteService } from 'src/app/services/paciente.service';
import { PostocoletaService } from 'src/app/services/postocoleta.service';

@Component({
  selector: 'app-os-read',
  templateUrl: './os-read.component.html',
  styleUrls: ['./os-read.component.css']
})
export class OsReadComponent implements OnInit {

  lista: OS[] = [];

  displayedColumns: string[] = ['id' ,'convenio','medico','paciente', 'postocoleta','data','action'];
  dataSource = new MatTableDataSource<OS>(this.lista);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private osservice:OsService,
              private medicoservice:MedicoService,
              private pacienteservice:PacienteService,
              private postocoletaservice:PostocoletaService,
              private router:Router) { }

  ngOnInit(): void {
    this.findAll(); 
  }

  findAll():void{
    this.osservice.findAll().subscribe((resposta) => {
        this.lista = resposta;
        

        this.listarMedico();
        this.listarPaciente();
        this.listarPostoColeta();
        this.dataSource = new MatTableDataSource<OS>(this.lista);
        this.dataSource.paginator = this.paginator;
    })
  }

  listarMedico():void{
    this.lista.forEach(x => {
      this.medicoservice.findById(x.medico).subscribe(resposta =>{
        x.medico = resposta.nome;
      })
    })
  }

  listarPaciente():void{
    this.lista.forEach(x => {
      this.pacienteservice.findById(x.paciente).subscribe(resposta =>{
        x.paciente = resposta.nome;
      })
    })
  }

  listarPostoColeta():void{
    this.lista.forEach(x => {
      this.postocoletaservice.findById(x.postocoleta).subscribe(resposta =>{
        x.postocoleta = resposta.descricao;
      })
    })
  }

  Create():void{
    this.router.navigate(['os/create'])
  }
}
