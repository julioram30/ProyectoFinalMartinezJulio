import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entorno',
  templateUrl: './entorno.component.html',
  styleUrls: ['./entorno.component.css']
})
export class EntornoComponent implements OnInit {

  public menuSelec :string = '';
  public blank:boolean=true;
  public display:boolean=false;
  public crud:boolean=false;
  public logout:boolean=false;
  public sidenav:boolean=false;
  
  constructor() { }

  ngOnInit() {
  }
  
  
  // public seleccion(itemMenu:string){
  
  
  // switch(itemMenu){
  //   case "CRUD":
  //     this.display= true;
  //     this.crud= false;
  //     this.logout=false;
  //     break;
  //   case "Listado":
  //       this.crud= true;
  //       this.display=false;
  //       this.logout=false;
  //       break;
  //   case "Logout":
  //       this.logout= false;
  //       this.display=false;
  //       this.crud= false;
  //       break;   
  //   }
  
  // }  


  public sideSwitch(){
  alert('otro cambio')
  this.sidenav=!this.sidenav;
}  


}
