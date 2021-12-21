import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCachorrosComponent } from './listar-cachorros/listar-cachorros.component';
import { PerfilCachorroComponent } from './perfil-cachorro/perfil-cachorro.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: ListarCachorrosComponent},
  { path: 'cachorro/:id', component: PerfilCachorroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
