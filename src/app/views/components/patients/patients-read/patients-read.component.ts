import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-patients-read',
  templateUrl: './patients-read.component.html',
  styleUrls: ['./patients-read.component.css']
})
export class PatientsReadComponent implements OnInit {

  lista: Paciente[] = []

  displayedColumns: string[] = ['id' ,'nome','dataNasc','sexo', 'endereco','action'];
  dataSource = new MatTableDataSource<Paciente>(this.lista);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private pacienteservice:PacienteService,
              private router:Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll():void{
    this.pacienteservice.findAll().subscribe((resposta) => {
        this.lista = resposta;
        this.dataSource = new MatTableDataSource<Paciente>(this.lista);
        this.dataSource.paginator = this.paginator;
    })
  }

  Create():void{
    this.router.navigate(['patients/create'])
  }
}
