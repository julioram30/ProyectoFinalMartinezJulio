import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entorno',
  templateUrl: './entorno.component.html',
  styleUrls: ['./entorno.component.css']
})
export class EntornoComponent  {

  
  constructor(private router:Router){}

  
  seleccionado(sel:string){
        console.log(sel);
        this.router.navigate([sel]);
    }  

}  



