import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-presupuesto',
  templateUrl: './ingresar-presupuesto.component.html',
  styleUrls: ['./ingresar-presupuesto.component.scss'],
})
export class IngresarPresupuestoComponent implements OnInit {
  cantidad: number;
  cantidadIncorrecta: boolean;

  constructor(private _presupuestoService : PresupuestoService) {
    this.cantidad = 0;
    this.cantidadIncorrecta = false;
  }

  agregar() {
    if (this.cantidad>0){
      this.cantidadIncorrecta= false;
    }
    else{
      this.cantidadIncorrecta = true;
    }
  }

  ngOnInit(): void {}
}
