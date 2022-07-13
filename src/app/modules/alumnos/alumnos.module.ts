import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ MatTableModule } from '@angular/material/table';

import { AlumnosComponent } from './alumnos.component';
import { ListadoAlumnosComponent } from "./listadoalumnos/ListadoAlumnosComponent";

@NgModule({
  
  imports: [
    CommonModule,
    MatTableModule
  ],
  
  declarations: [AlumnosComponent,ListadoAlumnosComponent]
})
export class AlumnosModule { }
