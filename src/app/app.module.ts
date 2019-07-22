import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
//ruta
// import {AppRoutingModule} from './app-routing.module'

import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ContactosComponent } from './contactos/contactos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NoticiaComponent } from './noticia/noticia.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HijoComponent } from './hijo/hijo.component';
import { Hijo2Component } from './hijo2/hijo2.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactosComponent,
    NoticiaComponent,
    FormularioComponent,
    HijoComponent,
    Hijo2Component,
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
    // AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
