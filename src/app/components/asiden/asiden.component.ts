import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-asiden',
  templateUrl: './asiden.component.html',
  styleUrls: ['./asiden.component.css']
})
export class AsidenComponent implements OnInit {

  
  // options = this._formBuilder.group({
  //   bottom: 0,
  //   fixed: false,
  //   top: 0,
  // });

  // constructor(private _formBuilder: FormBuilder) {}

  // shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);

  ngOnInit(): void {
  }

  toggle(){
    
    alert("aside");
  }

}
