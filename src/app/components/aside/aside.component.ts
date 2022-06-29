import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  public elemnts:string[]=["Elemento  1","Elemento 2","Elemento 3"];

  
  showFiller = false;
  
  constructor() {}

  ngOnInit(): void {}

}

