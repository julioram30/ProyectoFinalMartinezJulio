import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntornoComponent } from './entorno.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { NavComponent } from 'src/app/components/nav/nav.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    EntornoComponent,
    NavComponent,
    FooterComponent
  ]
})
export class EntornoModule { }
