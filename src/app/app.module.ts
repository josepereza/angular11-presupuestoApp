import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { GastosComponent } from './components/gastos/gastos.component';
import { IntroducirPresupuestoComponent } from './components/introducir-presupuesto/introducir-presupuesto.component';
import { IngresarGastoComponent } from './components/gastos/ingresar-gasto/ingresar-gasto.component';
import { ListarGastoComponent } from './components/gastos/listar-gasto/listar-gasto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    GastosComponent,
    IntroducirPresupuestoComponent,
    IngresarGastoComponent,
    ListarGastoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
