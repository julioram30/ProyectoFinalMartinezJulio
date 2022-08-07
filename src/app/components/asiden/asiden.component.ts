import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AlumnosComponent } from 'src/app/modules/alumnos/alumnos.component';
import { CursosComponent } from 'src/app/modules/cursos/cursos.component';
import { LoginFormComponent } from 'src/app/modules/seguridad/login-form/login-form.component';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-asiden',
  templateUrl: './asiden.component.html',
  styleUrls: ['./asiden.component.css']
})

export class AsidenComponent implements OnInit {

  @ViewChild('sidenav')
  public sidenav!: MatSidenav;
  routes =  [
    { path: 'alumnos', component: AlumnosComponent, label: 'Alumnos' },
    { path: 'cursos', component: CursosComponent, label: 'Cursos' }, 
    { path: 'usuarios', component: LoginFormComponent, label: 'Usuarios' }
   ];

  

  constructor(private sideNavService: MenuService) { }
  
  ngOnInit() { 
   this.sideNavService.sideNavToggleSubject.subscribe(()=> {
      this.sidenav.toggle();
    });

}
}
