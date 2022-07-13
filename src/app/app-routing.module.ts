import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { AlumnosComponent } from './modules/alumnos/alumnos.component';
import { FormAlumnosComponent } from './modules/alumnos/formAlumnos/formAlumnos.component';
import { ListadoAlumnosComponent } from './modules/alumnos/listadoalumnos/ListadoAlumnosComponent';


const routes: Routes = [
  {path:"login",component:LoginFormComponent},
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
