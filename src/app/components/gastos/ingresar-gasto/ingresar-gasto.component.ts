import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject,Observable } from 'rxjs';

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
  console.log('dentro de ingresar ',this.gastoFormulario.value)
  this.ps.agregarGasto(this.gastoFormulario.value)
}
introducir(){
  this.ps.presupuesto=0;
  this.ps.restante=0;
  this.ps.gasto$=new Subject();
  this.router.navigate(['/'])
}
}
