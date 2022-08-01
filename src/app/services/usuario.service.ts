import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

usuarios:Usuario[]=
[
  {
   "nombre": "Miss Sammy McLaughlin",
   "email": "Justyn_Kerluke27@yahoo.com",
   "clave": "96Pl_sVl6clavD2",
   "perfil": "Administrador",
   "id": "1"
  },
  {
   "nombre": "Luther Kessler",
   "email": "Aglae.Price25@yahoo.com",
   "clave": "pexlF_mog8KTHcO",
   "perfil": "Usuario",
   "id": "2"
  },
  {
   "nombre": "Karen MacGyver",
   "email": "Cheyenne.Marks@hotmail.com",
   "clave": "iZ9eUcq1fgC2oE5",
   "perfil": "Usuario",
   "id": "3"
  },
  {
   "nombre": "Candace Rosenbaum",
  "email": "Lera.Wisoky62@yahoo.com",
   "clave": "0K6qR0Fuz8NkokM",
   "perfil": "Usuario",
   "id": "4"
  },
  {
   "nombre": "Tim Kertzmann",
    "email": "Hayden.Baumbach@yahoo.com",
   "clave": "26xWi4kmC8wYh6b",
   "perfil": "Usuario",
   "id": "5"
  }
 ]

userSelected$ = new Subject<Usuario | null>();
users$ = new BehaviorSubject<Usuario[]>(this.usuarios);
url:string=environment.urlMockApi+'Usuarios/';
  constructor(private httpUsuario:HttpClient) { }

public validarUsuario(usuario:string,clave:string): Observable<Usuario | null>{
  return this.httpUsuario.get<Usuario[]>(this.url ,{headers: new HttpHeaders({
    "authorization": 'Este es el token'  })}
  ).pipe(
    map((users) => {
      return users.find(user =>  user.nombre == usuario && user.clave == clave) || null
    }),
    catchError((error) => {
      console.log(error)
      throw new Error()
    })
  );
}






}
