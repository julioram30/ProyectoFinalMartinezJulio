import { Component, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/models/alumno.model';
import { AlumnosService } from 'src/app/services/alumnos.service';


@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.css']
})
export class ListadoAlumnosComponent implements OnInit {

  public rptAumnos?: Alumno;

  displayedColumnsTable = ['index', 'apellido', 'nombre','email', 'edad', 'nota', 'id'];
  
  tableDataSource$: Observable<MatTableDataSource<Alumno>> | null = null;

  constructor(public listaAlumnos: AlumnosService) { }

  ngOnInit(): void {
    this.tableDataSource$ = this.listaAlumnos.getAlumnos().pipe(tap((alumnos) => console.log(alumnos)),
      map((alumnos) => new MatTableDataSource<Alumno>(alumnos)));
   }


}
