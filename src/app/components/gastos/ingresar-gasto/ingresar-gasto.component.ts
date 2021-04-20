import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent implements OnInit {
  gastoFormulario = new FormGroup({
    descripcion: new FormControl(''),
    importe: new FormControl(0),
  });
  constructor(private ps:PresupuestoService, private router:Router) { }

  ngOnInit(): void {
    console.log(this.ps.presupuesto)
  }
migasto(){
  console.log(this.gastoFormulario.value)
  this.ps.agregarGasto(this.gastoFormulario.value)
}
introducir(){
  this.router.navigate(['/introducirPresupuesto'])
}
}
