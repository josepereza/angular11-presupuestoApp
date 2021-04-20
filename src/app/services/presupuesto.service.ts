import { Injectable } from '@angular/core';
import { Subject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {
presupuesto:number=0;
restante:number=0;
gasto$ = new Subject();

  constructor() { }

  agregarGasto(dato:any){
this.gasto$.next(dato)

  }
  getGastos():Observable<any>{
return this.gasto$
  }
}
