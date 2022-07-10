import { Component, EventEmitter, Input, OnInit,Output,ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})



export class NavComponent implements OnInit {

  @Output() menuSeleccionado = new EventEmitter<string>();  
  @Output() sideSwitchNavBarIut = new EventEmitter<string>();  
  

  public itemMenu:string[]=["CRUD","Listado","Logout"]

  constructor() { }

  ngOnInit(): void { }

  public sideSwitch(){
    this.sideSwitchNavBarIut.emit();
  }

  public seleccion(menu:string){
    this.menuSeleccionado.emit(menu);
  }
}
