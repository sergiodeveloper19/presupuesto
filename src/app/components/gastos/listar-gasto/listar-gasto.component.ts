import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrls: ['./listar-gasto.component.scss'],
})
export class ListarGastoComponent implements OnInit {
  subscription: Subscription;
  presupuesto: number = 0;
  restante: number = 0;
  listGastos: any[] = [];

  constructor(private _presupuestoService: PresupuestoService) {
    this.subscription = this._presupuestoService
      .getGastos()
      .subscribe((data) => {
        this.restante = this.restante - data.cantidad;
        this.listGastos.push(data);
      });
  }

  ngOnInit(): void {
    this.presupuesto = this._presupuestoService.presupuesto;
    this.restante = this._presupuestoService.restante;
  }

  ngOndestroy() {
    this.subscription.unsubscribe();
  }

  aplicarColorRestante() {
    if (this.presupuesto / 4 > this.restante) {
      return 'alert alert-danger';
    } else if (this.presupuesto / 2 > this.restante) {
      return 'alert alert-warning';
    } else {
      return 'alert alert-secondary';
    }
  }
}
