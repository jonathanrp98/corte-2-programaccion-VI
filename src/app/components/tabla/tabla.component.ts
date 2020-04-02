import { Component, OnInit } from '@angular/core';
import {Personas} from '../../interfaces/personas.interface';

import {PersonasService} from '../../services/personas.service';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  personas: Personas[] = [];
  constructor(private personasService: PersonasService ) {

  }

  ngOnInit() {
    this.llamarServicioPersonas();
  }

  llamarServicioPersonas() {
    this.personasService.obtenerPersonas().subscribe((personas: Personas[]) =>{
      console.log(personas);
      this.personas = personas;
    });
  }

}

