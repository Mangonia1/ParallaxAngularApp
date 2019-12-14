import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuariosService } from './usuarios.service';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaComponent } from './lista/lista.component';
import { FormularioeditarComponent } from './formularioeditar/formularioeditar.component';
var UsuariosModule = /** @class */ (function () {
    function UsuariosModule() {
    }
    UsuariosModule = tslib_1.__decorate([
        NgModule({
            declarations: [FormularioComponent, ListaComponent, FormularioeditarComponent],
            imports: [
                CommonModule,
                HttpClientModule,
                FormsModule,
                ReactiveFormsModule
            ],
            providers: [UsuariosService]
        })
    ], UsuariosModule);
    return UsuariosModule;
}());
export { UsuariosModule };
//# sourceMappingURL=usuarios.module.js.map