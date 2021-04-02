import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GerenteComponent } from './components/gerente/gerente.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { ReporteVehiculoComponent } from './components/reporte-vehiculo/reporte-vehiculo.component';
import { ReporteMecanicoComponent } from './components/reporte-mecanico/reporte-mecanico.component';
import { ReporteClienteComponent } from './components/reporte-cliente/reporte-cliente.component';
import { ReporteOtroComponent } from './components/reporte-otro/reporte-otro.component';
import { CitasComponent } from './components/citas/citas.component';
import { ManejoCitasComponent } from './components/manejo-citas/manejo-citas.component';
import { OrdenesComponent } from './components/ordenes/ordenes.component';
import { ManejoOrdenesComponent } from './components/manejo-ordenes/manejo-ordenes.component';

@NgModule({
  declarations: [
    AppComponent,
    GerenteComponent,
    ReportesComponent,
    ReporteVehiculoComponent,
    ReporteMecanicoComponent,
    ReporteClienteComponent,
    ReporteOtroComponent,
    CitasComponent,
    ManejoCitasComponent,
    OrdenesComponent,
    ManejoOrdenesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
