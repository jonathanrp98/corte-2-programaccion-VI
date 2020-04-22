import { Component, OnInit } from '@angular/core';
import {Personas} from '../../interfaces/personas.interface';
import {PersonasService} from '../../services/personas.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  nombreInput = new FormControl('');
  apodoInput = new FormControl('');
  posicionInput = new FormControl('');
  imagenInput = new FormControl('');
  edadInput = new FormControl('');
  estadoInput = new FormControl('');


  personas: Personas[] = [];
  constructor(private personasService: PersonasService ) {

  }

  ngOnInit() {
    this.llamarServicioPersonas();
  }

  llamarServicioPersonas() {
    this.personasService.obtenerPersonas().subscribe((personas: Personas[]) => {
      console.log(personas);
      this.personas = personas;
    });
  }

  guardar() {
      this.personasService.guardarPersonas(this.nombreInput.value,
      this.apodoInput.value,
      this.posicionInput.value,
      this.imagenInput.value,
      this.edadInput.value,
      this.estadoInput.value)
      .subscribe(snap => {
      console.log(snap);
    });

    this.ngOnInit();

  }

}

