import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Personas} from '../interfaces/personas.interface';
import {FormControl} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private httpClient: HttpClient) { }

  obtenerPersonas() {
    return this.httpClient.get('http://localhost/angulardb/consultados.php');
  }

  guardarPersonas(nombre: string, apodo: string, posicion: string, imagen: string, edad: string, estado: string) {
 
    return this.httpClient.get('http://localhost/angulardb/guardar.php?nombre=' + nombre + '&apodo=' + apodo + '&posicion=' + posicion + '&foto=' + imagen + '&edad=' + edad + '&estado=' + estado);
  }
}

