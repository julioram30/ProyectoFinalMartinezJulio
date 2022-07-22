import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  
  itemsMenu:string[]=[''];
  constructor() { }

 getMenu(){ 
  return this.itemsMenu;
 }

 setMenu(items:string[]){ 
  this.itemsMenu=items;
 }
}
