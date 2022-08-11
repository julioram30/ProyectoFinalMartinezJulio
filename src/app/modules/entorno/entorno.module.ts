import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntornoComponent } from './entorno.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { NavComponent } from 'src/app/components/nav/nav.component';
import { MaterialModule } from '../material/material.module';
import { EntornoRoutingModule } from './entorno.routing.module';
import { AsidenComponent } from 'src/app/components/asiden/asiden.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    EntornoRoutingModule
  ],
  declarations: [
    EntornoComponent,
    NavComponent,
    FooterComponent,
    AsidenComponent
  ]
})
export class EntornoModule { }
