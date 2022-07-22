import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from '../alumnos/alumnos.component';
import { CursosComponent } from '../cursos/cursos.component';
import { EntornoComponent } from './entorno.component';

const routes: Routes = [
 {path:"",component:EntornoComponent},
 {path:"alumnos",component:AlumnosComponent},
 {path:"cursos",component:CursosComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntornoRoutingModule { }
