import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})



export class NavComponent implements OnInit {

    @Output() sideSwitchNavBarOutPut = new EventEmitter<string>(); 
    @Input() SidenavStatus!: boolean 
  
  constructor(private router:Router) { }

  ngOnInit(): void { }

  public sideSwitch(){
    alert(this.SidenavStatus)
    this.sideSwitchNavBarOutPut.emit();
     
  }

  public logOut(){
        this.router.navigate(['/']);   
  }
}




