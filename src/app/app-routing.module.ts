import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './modules/seguridad/login-form/login-form.component';
//import { AlumnosComponent } from './modules/alumnos/alumnos.component';
import { FormAlumnosComponent } from './modules/alumnos/formAlumnos/formAlumnos.component';
import { ListadoAlumnosComponent } from './modules/alumnos/listadoalumnos/ListadoAlumnosComponent';

const routes: Routes = [
  
  {path:"entorno",loadChildren:() => import("./modules/entorno/entorno.module").then((m)=>m.EntornoModule)}, //component:EntornoComponent},
  {path:"alumnos",loadChildren:() => import("./modules/alumnos/alumnos.module").then((m)=> m.AlumnosModule)}, // {component:AlumnosComponent},
  //{path:"listados",component:ListadoAlumnosComponent},
  //{path:"alumnosabm",component:FormAlumnosComponent},
  {path:"",component:LoginFormComponent},
  {path:"**",redirectTo:""}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
