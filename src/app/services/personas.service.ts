import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Personas} from '../interfaces/personas.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private httpClient: HttpClient) { }

  obtenerPersonas() {
    return this.httpClient.get('https://api-mi-liga.now.sh/api/jugadores');
  }
}
