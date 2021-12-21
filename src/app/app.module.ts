import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarCachorrosComponent } from './listar-cachorros/listar-cachorros.component';
import { PerfilCachorroComponent } from './perfil-cachorro/perfil-cachorro.component';

import { HttpClientModule } from '@angular/common/http';
import { CachorrosService } from './service/cachorros.service';
import { APP_BASE_HREF } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarCachorrosComponent,
    PerfilCachorroComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    CachorrosService,
    { provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
