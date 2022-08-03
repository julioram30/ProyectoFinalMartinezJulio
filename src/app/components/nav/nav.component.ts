import { Component, ElementRef, EventEmitter, Input, OnInit,Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

    @Output('toggleSidenavButton') sideSwitchNavBarOutPut = new EventEmitter<string>(); 
    @Input() SidenavStatus!: boolean 
  
  menuItems:string[]=['Alumnos  ',' Cursos'];

  constructor(private router:Router, private menuServicio:MenuService) { }

  ngOnInit(): void { }

  menuClik(){
    
    this.menuItems=this.menuServicio.getMenu();
   }

  public logOut(){
        this.router.navigate(['/']);   
  }

  toggleSidenavButton(){
    this.sideSwitchNavBarOutPut.emit();
  }
}




