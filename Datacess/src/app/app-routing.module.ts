import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CalculateComponent } from './pages/calculate/calculate.component';
import { LoginComponent } from './pages/login/login.component';

import { BarrasGuardService as BarrasGuard } from './services/barras-guard.service';
import { PieGuardService as PieGuard } from './services/pie-guard.service';

const routes: Routes = [
   { path: 'login', component: LoginComponent },
  { path: 'barras', component: HomeComponent, canActivate: [BarrasGuard], data: { expectedRole: 'ROL_BARRAS' } },
  { path: 'pie', component: CalculateComponent, canActivate: [PieGuard], data: { expectedRole: 'ROL_PIE' } },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
