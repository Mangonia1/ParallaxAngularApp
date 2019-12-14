import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent} from './app.component';
import { LoginComponent } from './usuarios/login/login.component';
import { FormularioComponent} from './usuarios/formulario/formulario.component';
import { ListaComponent} from './usuarios/lista/lista.component';
import { ListasoloclientesComponent } from './usuarios/listasoloclientes/listasoloclientes.component';
import { FormularioeditarComponent } from './usuarios/formularioeditar/formularioeditar.component';
import { FormulariocuestionarioComponent } from './cuestionarios/formulariocuestionario/formulariocuestionario.component';
import { EditarcuestionarioComponent } from './cuestionarios/editarcuestionario/editarcuestionario.component';
import { ListacuestionarioComponent } from './cuestionarios/listacuestionario/listacuestionario.component';
import { ListaporcalificarComponent } from './cuestionarios/listaporcalificar/listaporcalificar.component';
import { EditpreguntaComponent } from './cuestionarios/editpregunta/editpregunta.component';
import { CrearpreguntaComponent } from './cuestionarios/crearpregunta/crearpregunta.component';
import { RespondercuestionarioComponent } from './cuestionarios/respondercuestionario/respondercuestionario.component';
import { EmpresaeditComponent } from './cuestionarios/empresaedit/empresaedit.component';
import { EmpresaformularioComponent } from './cuestionarios/empresaformulario/empresaformulario.component';
import { EmpresalistaComponent } from './cuestionarios/empresalista/empresalista.component';
import { VeresultadoComponent } from './cuestionarios/veresultado/veresultado.component';

import { CreartipocuesComponent } from './cuestionarios/creartipocues/creartipocues.component';
import { EdittipocuesComponent } from './cuestionarios/edittipocues/edittipocues.component';
import { ListatipocuesComponent } from './cuestionarios/listatipocues/listatipocues.component';
import { CrearcuesmodComponent } from './cuestionarios/crearcuesmod/crearcuesmod.component';
import { EditcuesmodComponent } from './cuestionarios/editcuesmod/editcuesmod.component';
import { ListacuesmodComponent } from './cuestionarios/listacuesmod/listacuesmod.component';
import { LoginGuard } from './login.guard';
import { RolGuard } from './rol.guard';
import { RolGuard2 } from './rol.guard2';
import { RolGuard3 } from './rol.guard3';

const routes: Routes = [
    //-----------------RUTAS USUARIO--------------------
    {path: '',component: LoginComponent},
    {path: 'formulariousuario',component: FormularioComponent, canActivate:[LoginGuard, RolGuard]},
    {path: 'listausuario',component: ListaComponent, canActivate:[LoginGuard, RolGuard]},
    {path: 'listausuariosolocliente',component: ListasoloclientesComponent, canActivate:[LoginGuard, RolGuard]},
    {path: 'editarusuario/:id',component:FormularioeditarComponent, canActivate:[LoginGuard, RolGuard]},


    //-----------------RUTAS EMPRESA--------------------

    {path: 'formularioempresa',component: EmpresaformularioComponent, canActivate:[LoginGuard, RolGuard]},
    {path: 'listaempresa',component: EmpresalistaComponent, canActivate:[LoginGuard, RolGuard]},
    {path: 'editarempresa/:id',component:EmpresaeditComponent, canActivate:[LoginGuard, RolGuard]},

    //-----------------RUTAS Tipo Cuestionario--------------------

    {path: 'formulariotipocuestionario',component: CreartipocuesComponent, canActivate:[LoginGuard, RolGuard]},
    {path: 'listatipocuestionario',component: ListatipocuesComponent, canActivate:[LoginGuard]},
    {path: 'editartipocuestionario/:id',component: EdittipocuesComponent, canActivate:[LoginGuard, RolGuard]},

    //-----------------RUTAS Tipo Cuestionario--------------------

    //-----------------RUTAS Cuestionario Model--------------------
    {path: 'agregarcuestionariomodel/:id',component: CrearcuesmodComponent, canActivate:[LoginGuard, RolGuard]},
    {path: 'editarcuestionariomodel/:id',component: EditcuesmodComponent, canActivate:[LoginGuard, RolGuard]},
    //-----------------RUTAS Cuestionario Model--------------------

//-----------------RUTAS Cuestionario--------------------
    {path: 'formulariocuestionario',component: FormulariocuestionarioComponent, canActivate:[LoginGuard, RolGuard]},
    {path: 'listacuestionario',component: ListacuestionarioComponent, canActivate:[LoginGuard]},
    {path: 'editarcuestionario/:id',component: EditarcuestionarioComponent, canActivate:[LoginGuard, RolGuard]},
    {path: 'veresultado/:id',component: VeresultadoComponent, canActivate:[LoginGuard]},

//-----------------RUTAS Pregunta--------------------
{path: 'agregarpregunta/:id',component: CrearpreguntaComponent, canActivate:[LoginGuard, RolGuard]},
{path: 'editarpregunta/:id/:id2',component: EditpreguntaComponent, canActivate:[LoginGuard, RolGuard]},
{path: 'responderpregunta/:id',component: RespondercuestionarioComponent, canActivate:[LoginGuard, RolGuard3]}

  
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  