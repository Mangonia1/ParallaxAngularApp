import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
var FormularioComponent = /** @class */ (function () {
    function FormularioComponent(usuariosservice) {
        this.usuariosservice = usuariosservice;
    }
    FormularioComponent.prototype.ngOnInit = function () {
        this.usuario = this.usuariosservice.nuevousuario();
    };
    FormularioComponent.prototype.agregarusuario = function () {
        this.usuariosservice.agregarUsuario(this.usuario).subscribe(function (data) {
            console.log(data);
        }, function (error) { return console.log(error); });
        this.usuario = this.usuariosservice.nuevousuario();
    };
    FormularioComponent = tslib_1.__decorate([
        Component({
            selector: 'app-formulario',
            templateUrl: './formulario.component.html',
            styleUrls: ['./formulario.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [UsuariosService])
    ], FormularioComponent);
    return FormularioComponent;
}());
export { FormularioComponent };
//# sourceMappingURL=formulario.component.js.map