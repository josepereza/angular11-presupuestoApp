import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {

  constructor(private ps:PresupuestoService) { }

  ngOnInit(): void {
    console.log('tastos comp.', this.ps.presupuesto)
  }

}
