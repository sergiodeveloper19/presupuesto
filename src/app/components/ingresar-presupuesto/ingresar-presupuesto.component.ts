import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingresar-presupuesto',
  templateUrl: './ingresar-presupuesto.component.html',
  styleUrls: ['./ingresar-presupuesto.component.scss'],
})
export class IngresarPresupuestoComponent implements OnInit {
  cantidad: number;
  cantidadIncorrecta: boolean;

  constructor() {
    this.cantidad = 0;
    this.cantidadIncorrecta = false;
  }
  agregar(){
    
  }

  ngOnInit(): void {}
}
