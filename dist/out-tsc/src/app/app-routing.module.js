import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormularioComponent } from './usuarios/formulario/formulario.component';
import { ListaComponent } from './usuarios/lista/lista.component';
import { FormularioeditarComponent } from './usuarios/formularioeditar/formularioeditar.component';
var routes = [
    //-----------------RUTAS USUARIO--------------------
    //{path: '',component: AppComponent},
    { path: 'formulariousuario', component: FormularioComponent },
    { path: 'listausuario', component: ListaComponent },
    { path: 'editarusuario/:id', component: FormularioeditarComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map