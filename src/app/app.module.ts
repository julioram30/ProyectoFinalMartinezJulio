import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
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
import { LoginFormComponent } from './modules/seguridad/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    AsidenComponent,
    LoginFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
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
