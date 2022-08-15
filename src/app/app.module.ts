import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './modules/material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormAlumnosModule } from './modules/alumnos/formAlumnos/FormAlumnosModule';
import { AlumnosModule } from './modules/alumnos/alumnos.module';
import { EntornoModule } from './modules/entorno/entorno.module';
import { SeguridadModule } from './modules/seguridad/seguridad.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormAlumnosModule,
    AlumnosModule,
    EntornoModule,
    SeguridadModule,
    HttpClientModule,
    StoreModule.forRoot({}, {})
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
