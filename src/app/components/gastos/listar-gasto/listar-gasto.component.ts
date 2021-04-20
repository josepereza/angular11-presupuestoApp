import { Component, OnDestroy, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrls: ['./listar-gasto.component.css']
})
export class ListarGastoComponent implements OnInit, OnDestroy {
gastos:any[]=[];
total:number=0
  constructor(public ps:PresupuestoService) { }

  ngOnInit(): void {
    this.ps.getGastos().subscribe(dato=>{
      console.log('listas gasto',dato )
      this.gastos.push(dato)
      this.ps.restante=this.ps.restante-dato.importe
      console.log('gastos ',this.ps.restante)
      console.log('estos gastos mios', this.gastos)
    })
  }
borrar(indice:any, importe:any){
  this.ps.restante =this.ps.restante+ importe;
  console.log('es el total' ,this.total)
  this.gastos.splice(indice,1)
}
ngOnDestroy() {
  this.gastos=[]
}
}
