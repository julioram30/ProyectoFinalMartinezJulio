import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormAlumnosComponent } from './formAlumnos.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,MatInputModule
  ],
  declarations: [FormAlumnosComponent]
})
export class FormAlumnosModule {
}
