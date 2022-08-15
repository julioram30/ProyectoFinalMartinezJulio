import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  
  public sideNavToggleSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  
  itemsMenu:string[]=[''];
  
  constructor() { }

 
  getMenu(){ 
  return this.itemsMenu;
 }

 
 setMenu(items:string[]){ 
  this.itemsMenu=items;
 }

 public toggle() {
  return this.sideNavToggleSubject.next(null);
} 
}
