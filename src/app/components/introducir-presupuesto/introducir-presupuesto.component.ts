import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-introducir-presupuesto',
  templateUrl: './introducir-presupuesto.component.html',
  styleUrls: ['./introducir-presupuesto.component.css']
})
export class IntroducirPresupuestoComponent implements OnInit {
presupuesto:string=''
info:boolean=false
  constructor(private ps:PresupuestoService, private router:Router) { }

  ngOnInit(): void {
  }
cantidad(){
if (+this.presupuesto<=0){
  this.info=true;


}else{
  this.info=false;
  console.log('introducido presp. ', this.presupuesto)
  this.ps.presupuesto= parseInt(this.presupuesto)
  this.ps.restante=parseInt(this.presupuesto)
 console.log('introducir ', this.ps.presupuesto)
 this.router.navigate(['/gastos'])
}

}
}
