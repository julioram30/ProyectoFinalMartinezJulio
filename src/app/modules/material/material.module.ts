import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatSidenavContent, MatSidenavModule} from '@angular/material/sidenav'; 
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [],

  exports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule
    
  ]
})

export class MaterialModule { }
