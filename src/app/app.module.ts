import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AsideComponent } from './components/aside/aside.component';
import { MainComponent } from './components/main/main.component';
import { AsidenComponent } from './components/asiden/asiden.component';

import { FooterComponent } from './components/footer/footer.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './modules/material/material.module';
import { FormAlumnosModule } from './modules/alumnos/formAlumnos/FormAlumnosModule';
import { AlumnosModule } from './modules/alumnos/alumnos.module';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AsideComponent,
    MainComponent,
    FooterComponent,
    LoginFormComponent,
    AsidenComponent
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormAlumnosModule,
    AlumnosModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
