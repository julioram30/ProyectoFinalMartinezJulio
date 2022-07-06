import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Julio A. Marines CRUD Alumnos y cursos';
  public menuSelec :string = '';
  public blank:boolean=true;
  public display:boolean=false;
  public crud:boolean=false;
  public logout:boolean=false;
  public loginOk:boolean=false;

public seleccion(itemMenu:string){
  
  
  switch(itemMenu){
    case "CRUD":
      this.display= true;
      this.crud= false;
      this.logout=false;
      break;
    case "Listado":
        this.crud= true;
        this.display=false;
        this.logout=false;
        break;
    case "Salir":
        this.logout= false;
        this.display=false;
        this.crud= false;
        this.loginOk=false;
        break;   
  }
  
}  

public logOK(){
  this.loginOk=true;
}

}
