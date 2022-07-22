import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';


@Component({
  selector: 'app-entorno',
  templateUrl: './entorno.component.html',
  styleUrls: ['./entorno.component.css']
})
export class EntornoComponent implements OnInit {

  @Output() menuOut = new EventEmitter;
  @Input() menuIn:string=''
  
  constructor( public switchSideBar:MenuService ) { }

  ngOnInit() { }

  cjange() {
    this.menuOut.emit(this.menuIn);
   }
  
}  



