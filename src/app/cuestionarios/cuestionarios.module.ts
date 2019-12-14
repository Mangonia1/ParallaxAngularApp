import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CuestionariosService } from './cuestionarios.service';

import { UsuariosService } from '../usuarios/usuarios.service';


import { FormulariocuestionarioComponent } from './formulariocuestionario/formulariocuestionario.component';
import { ListacuestionarioComponent } from './listacuestionario/listacuestionario.component';
import { EditarcuestionarioComponent } from './editarcuestionario/editarcuestionario.component';
import { CrearpreguntaComponent } from './crearpregunta/crearpregunta.component';
import { RespondercuestionarioComponent } from './respondercuestionario/respondercuestionario.component';
import { ListaporcalificarComponent } from './listaporcalificar/listaporcalificar.component';
import { EmpresaformularioComponent } from './empresaformulario/empresaformulario.component';
import { EmpresalistaComponent } from './empresalista/empresalista.component';
import { EmpresaeditComponent } from './empresaedit/empresaedit.component';
import { EditpreguntaComponent } from './editpregunta/editpregunta.component';
import { VeresultadoComponent } from './veresultado/veresultado.component';
import { CrearcuesmodComponent } from './crearcuesmod/crearcuesmod.component';
import { EditcuesmodComponent } from './editcuesmod/editcuesmod.component';
import { ListacuesmodComponent } from './listacuesmod/listacuesmod.component';
import { CreartipocuesComponent } from './creartipocues/creartipocues.component';
import { EdittipocuesComponent } from './edittipocues/edittipocues.component';
import { ListatipocuesComponent } from './listatipocues/listatipocues.component';



@NgModule({
  declarations: [FormulariocuestionarioComponent, ListacuestionarioComponent, EditarcuestionarioComponent, CrearpreguntaComponent, RespondercuestionarioComponent, ListaporcalificarComponent, EmpresaformularioComponent, EmpresalistaComponent, EmpresaeditComponent, EditpreguntaComponent, VeresultadoComponent, CrearcuesmodComponent, EditcuesmodComponent, ListacuesmodComponent, CreartipocuesComponent, EdittipocuesComponent, ListatipocuesComponent],
  imports: [
    CommonModule,
    //UsuariosService,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[CuestionariosService]
})
export class CuestionariosModule { }
