import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Alumno } from '../models/alumno.model';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

alumnos:Alumno[]=[
  {
   "apellido": "Hodkiewicz",
   "nombre": "Henrietta Crona",
   "edad": 99214,
   "nota": 42395,
   "id": "1"
  },
  {
   "apellido": "Rice",
   "nombre": "Jane Hayes",
   "edad": 32519,
   "nota": 4054,
   "id": "2"
  },
  {
   "apellido": "Turner",
   "nombre": "Mr. Tracey Morar",
   "edad": 30113,
   "nota": 8681,
   "id": "3"
  },
  {
   "apellido": "Upton",
   "nombre": "Michael Hackett",
   "edad": 90064,
   "nota": 65439,
   "id": "4"
  },
  {
   "apellido": "Nienow",
   "nombre": "Terrell Kemmer",
   "edad": 42694,
   "nota": 33922,
   "id": "5"
  },
  {
   "apellido": "Fadel",
   "nombre": "Sherri Fahey Jr.",
   "edad": 20350,
   "nota": 82689,
   "id": "6"
  },
  {
   "apellido": "Kuhn",
   "nombre": "Shari Abshire",
   "edad": 32484,
   "nota": 99461,
   "id": "7"
  },
  {
   "apellido": "Kerluke",
   "nombre": "Marie Senger",
   "edad": 61845,
   "nota": 33387,
   "id": "8"
  },
  {
   "apellido": "Stamm",
   "nombre": "Dorothy Keebler",
   "edad": 17605,
   "nota": 58154,
   "id": "9"
  },
  {
   "apellido": "Orn",
   "nombre": "Ms. Johnny Wuckert",
   "edad": 4668,
   "nota": 88342,
   "id": "10"
  },
  {
   "apellido": "Kihn",
   "nombre": "Jane Kuhic",
   "edad": 33997,
   "nota": 19536,
   "id": "11"
  },
  {
   "apellido": "Hilpert",
   "nombre": "Muriel Beier",
   "edad": 16221,
   "nota": 63090,
   "id": "12"
  },
  {
   "apellido": "Boyer",
   "nombre": "Kurt Dach",
   "edad": 79858,
   "nota": 14591,
   "id": "13"
  },
  {
   "apellido": "Runte",
   "nombre": "Belinda Conroy",
   "edad": 70470,
   "nota": 28676,
   "id": "14"
  } ]

 userSelected$ = new BehaviorSubject<Alumno | null>(null);
  alumnos$ = new BehaviorSubject<Alumno[]>(this.alumnos); 

 constructor() { }

listar(){
  return this.alumnos$.asObservable()
} 
}