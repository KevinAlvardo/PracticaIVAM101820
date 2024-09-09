import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CalculadoraNgComponent } from './calculadora-ng/calculadora-ng.component';
import { CompaComponent } from './compa/compa.component';
import { ProgramacionComponent } from './programacion/programacion.component';

const routes: Routes = [
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'calculadora-ng', component: CalculadoraNgComponent },
  { path: 'programacion', component: ProgramacionComponent },  // Se añadió una coma aquí
  { path: 'compa', component: CompaComponent },
  { path: '', redirectTo: '/calculadora', pathMatch: 'full' }, // Redirige a Calculadora por defecto
  { path: '**', redirectTo: '/calculadora' } // Redirige a Calculadora si la ruta no existe
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
