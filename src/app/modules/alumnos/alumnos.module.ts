import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ MatTableModule } from '@angular/material/table';

import { ListadoAlumnosComponent } from "./listadoalumnos/ListadoAlumnosComponent";
import { AlumnosRoutingModule } from './alumnos.routing.nodule';
import { AlumnosComponent } from './alumnos.component';

@NgModule({
  
  imports: [
    CommonModule,
    MatTableModule,
    AlumnosRoutingModule
  ],
  
  declarations: [AlumnosComponent, 
    ListadoAlumnosComponent]
})
export class AlumnosModule { }
