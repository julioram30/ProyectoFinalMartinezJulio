import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  formLogin= new FormGroup({
    user:new FormControl(''),
    pass: new FormControl('')
})  

  constructor() { }

  ngOnInit(): void {
  }
    validarUsuario(){}

}
