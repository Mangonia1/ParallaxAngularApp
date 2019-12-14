import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UsuariosService } from './usuarios.service';

import { FormularioComponent } from './formulario/formulario.component';
import { ListaComponent } from './lista/lista.component';
import { FormularioeditarComponent } from './formularioeditar/formularioeditar.component';
import { LoginComponent } from './login/login.component';
import { ListasoloclientesComponent } from './listasoloclientes/listasoloclientes.component';

@NgModule({
  declarations: [FormularioComponent, ListaComponent, FormularioeditarComponent, LoginComponent, ListasoloclientesComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[UsuariosService]
})
export class UsuariosModule { }
