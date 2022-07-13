import { Routes, RouterModule } from '@angular/router';
import { FormAlumnosComponent } from './formAlumnos/formAlumnos.component';
import { ListadoAlumnosComponent } from './listadoalumnos/ListadoAlumnosComponent';

const routes: Routes = [
  // { path:"listado", component:ListadoAlumnosComponent },
  // {path:"formalumnos",component:FormAlumnosComponent}
];

export const AlumnosRoutes = RouterModule.forChild(routes);
