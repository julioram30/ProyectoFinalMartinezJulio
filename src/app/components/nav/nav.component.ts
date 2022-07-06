import { Component, EventEmitter, OnInit,Output,ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})



export class NavComponent implements OnInit {

  @Output() menuSeleccionado = new EventEmitter<string>();  

  public itemMenu:string[]=["CRUD","Listado","Salir"]

  constructor() { }

  ngOnInit(): void { }

  public sideSwitch(){
    alert("clic")

  }

  public seleccion(menu:string){

    this.menuSeleccionado.emit(menu);

  }
}
