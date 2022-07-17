import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Julio A. Marines Administracion Alumnos y cursos';
  
  loginOk:boolean = false;

  constructor(private router: Router){}
  public logOK(){
     this.loginOk=!this.loginOk;
     this.router.navigate(['/entorno']);}

  // public logOut(){
  //    this.loginOk=false;
  //    this.router.navigate(['/']);
  //  }

}
