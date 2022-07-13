import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})



export class NavComponent implements OnInit {

  @Output() menuSeleccionado = new EventEmitter<string>();  
  @Output() sideSwitchNavBarIut = new EventEmitter<string>();  
  

 /*  public itemMenu:string[]=["Alumnos","Cursos","Logout"] */

  constructor() { }

  ngOnInit(): void { }

  public sideSwitch(){
    this.sideSwitchNavBarIut.emit();
    //this.router.navigate(['/dashboard']);
    
  }

  // public seleccion(menu:string){
  //   this.menuSeleccionado.emit(menu);
  // }
}




