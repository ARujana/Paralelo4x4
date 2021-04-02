import { ReporteOtroComponent } from './components/reporte-otro/reporte-otro.component';
import { ReporteVehiculoComponent } from './components/reporte-vehiculo/reporte-vehiculo.component';
import { ReporteMecanicoComponent } from './components/reporte-mecanico/reporte-mecanico.component';
import { ReporteClienteComponent } from './components/reporte-cliente/reporte-cliente.component';
import { ManejoOrdenesComponent } from './components/manejo-ordenes/manejo-ordenes.component';
import { ManejoCitasComponent } from './components/manejo-citas/manejo-citas.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { OrdenesComponent } from './components/ordenes/ordenes.component';
import { CitasComponent } from './components/citas/citas.component';
import { GerenteComponent } from './components/gerente/gerente.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: GerenteComponent},  
  {path: 'citas', component: CitasComponent},
  {path: 'ordenes', component: OrdenesComponent},
  {path: 'reportes', component: ReportesComponent}, 
  {path: 'mcitas', component: ManejoCitasComponent},
  {path: 'mordenes', component: ManejoOrdenesComponent}, 
  {path: 'repcliente', component: ReporteClienteComponent},
  {path: 'repmecanico', component: ReporteMecanicoComponent},
  {path: 'repvehiculo', component: ReporteVehiculoComponent},
  {path: 'repotros', component: ReporteOtroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
