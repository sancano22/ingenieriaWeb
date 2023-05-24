import { Component, OnInit } from '@angular/core';
import { ListaGalerias } from '../../interfaces/galeria';


@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {
   
 Fotos=ListaGalerias;

  constructor() { }

  ngOnInit(): void {
  }

}
