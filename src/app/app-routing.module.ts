import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './modules/seguridad/login-form/login-form.component';
import { AlumnosComponent } from './modules/alumnos/alumnos.component';
import { FormAlumnosComponent } from './modules/alumnos/formAlumnos/formAlumnos.component';
import { ListadoAlumnosComponent } from './modules/alumnos/listadoalumnos/ListadoAlumnosComponent';
import { EntornoComponent } from './modules/entorno/entorno.component';


const routes: Routes = [
  {path:"",component:LoginFormComponent},
  {path:"entorno",component:EntornoComponent},
  {path:"alumnos",component:AlumnosComponent},
  {path:"listados",component:ListadoAlumnosComponent},
  {path:"alumnosabm",component:FormAlumnosComponent},
  {path:"**",redirectTo:""}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
