import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './modules/material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideComponent } from './components/aside/aside.component';
import { AsidenComponent } from './components/asiden/asiden.component';
import { FormAlumnosModule } from './modules/alumnos/formAlumnos/FormAlumnosModule';
import { AlumnosModule } from './modules/alumnos/alumnos.module';
import { EntornoModule } from './modules/entorno/entorno.module';
import { SeguridadModule } from './modules/seguridad/seguridad.module';


@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    AsidenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormAlumnosModule,
    AlumnosModule,
    EntornoModule,
    SeguridadModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
