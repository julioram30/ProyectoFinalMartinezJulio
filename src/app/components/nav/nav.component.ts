import { Component, OnInit,Output,ViewChild } from '@angular/core';
import { AsidenComponent } from '../asiden/asiden.component';
import { ListadoAlumnosComponent } from '../listadoAlumnos/listado-alumnos/listado-alumnos.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})



export class NavComponent implements OnInit {

  

  
  public itemMenu:string[]=["Menu 1","Menu 2","Menu 3","Menu 4","Menu 5","Menu 6"]

  constructor() { }

  ngOnInit(): void { }

  public sideSwitch(){
    alert("clic")

  }

  public seleccion(menu:string){

    switch(menu) {
      case 'Menu 1':
        break;
       default:
        alert("otro puto MENU")
       break; 
      }

  }
}
