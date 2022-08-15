import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnosComponent } from './alumnos.component';
import { FormAlumnosComponent } from './formAlumnos/formAlumnos.component';
import { ListadoAlumnosComponent } from './listadoalumnos/ListadoAlumnosComponent';

const routes: Routes = [
  { path:'',component:AlumnosComponent },
  { path:"listado", component:ListadoAlumnosComponent },
  // {path:"formalumnos",component:FormAlumnosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

//export const AlumnosRoutes = RouterModule.forChild(routes);
export class AlumnosRoutingModule {}