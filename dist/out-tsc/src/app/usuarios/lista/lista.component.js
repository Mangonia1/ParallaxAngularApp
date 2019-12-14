import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Router } from '@angular/router';
var ListaComponent = /** @class */ (function () {
    function ListaComponent(usuarioservice, router) {
        this.usuarioservice = usuarioservice;
        this.router = router;
    }
    ListaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usuarioservice.getusuario().subscribe(function (data) { return _this.usuarios = data; });
    };
    ListaComponent.prototype.eliminarMono = function (id) {
        this.usuarioservice.destruirUsuario(id).subscribe(function () { return console.log("Usuario with Id = " + id + " deleted"); }, function (err) { return console.log(err); });
        window.location.reload();
    };
    ListaComponent.prototype.editarMono = function (id) {
    };
    ListaComponent = tslib_1.__decorate([
        Component({
            selector: 'app-lista',
            templateUrl: './lista.component.html',
            styleUrls: ['./lista.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [UsuariosService,
            Router])
    ], ListaComponent);
    return ListaComponent;
}());
export { ListaComponent };
//# sourceMappingURL=lista.component.js.map