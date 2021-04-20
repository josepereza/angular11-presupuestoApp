import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GastosComponent } from './components/gastos/gastos.component';
import { IntroducirPresupuestoComponent } from './components/introducir-presupuesto/introducir-presupuesto.component';

const routes: Routes = [
  {
    path:'', redirectTo:'introducirPresupuesto', pathMatch:'full'
  },
  {path:'introducirPresupuesto', component:IntroducirPresupuestoComponent},
  {path:'gastos', component:GastosComponent},
  {path:'**', redirectTo:'introducirPresupuesto', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
