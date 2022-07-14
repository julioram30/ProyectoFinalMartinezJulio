import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})



export class NavComponent implements OnInit {

    @Output() sideSwitchNavBarIut = new EventEmitter<string>();  
  
  constructor(private router:Router) { }

  ngOnInit(): void { }

  public sideSwitch(){
    this.sideSwitchNavBarIut.emit();
     
  }

  public logOut(){
        this.router.navigate(['/']);   
  }
}




