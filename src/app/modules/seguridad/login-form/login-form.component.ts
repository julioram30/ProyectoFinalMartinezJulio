import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

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

@Output() userValid = new EventEmitter<boolean>();

  constructor(public usuarioService:UsuarioService ) { }

  ngOnInit(): void { }
  
  validarUsuario(){
    alert('iniciando sesion')
      this.usuarioService.validarUsuario('admin','admin1');
      //this.userValid.emit(true);
    }

}
