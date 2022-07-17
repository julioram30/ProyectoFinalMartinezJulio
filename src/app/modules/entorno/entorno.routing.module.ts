import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntornoComponent } from './entorno.component';

const routes: Routes = [
 {path:"",component:EntornoComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntornoRoutingModule { }
