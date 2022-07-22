import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable,map,tap } from 'rxjs';
import { Alumno } from 'src/app/models/alumno.model';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  @Output() alumnosMenu = new EventEmitter(); 
  
  constructor(private menuServicio:MenuService) { }

  ngOnInit() {
    this.menuAlumnos();
   }

  menuAlumnos(){ 
      this.menuServicio.setMenu(['Listado','Formulario']);
  }

}
