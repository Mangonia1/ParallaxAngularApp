import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var UsuariosService = /** @class */ (function () {
    function UsuariosService(httpclient) {
        this.httpclient = httpclient;
        this.vari1 = "http://127.0.0.1:3333/usuario/eliminar";
        this.vari2 = "http://127.0.0.1:3333/usuario/usuariospersonas";
        this.vari3 = "http://127.0.0.1:3333/usuario/editar";
    }
    UsuariosService.prototype.agregarUsuario = function (usuario) {
        return this.httpclient.post("http://127.0.0.1:3333/usuario/guardar", usuario, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        });
    };
    UsuariosService.prototype.getusuario = function () {
        return this.httpclient.get("http://127.0.0.1:3333/usuario/ver");
    };
    UsuariosService.prototype.destruirUsuario = function (id) {
        return this.httpclient.put(this.vari1 + "/" + id, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        });
    };
    UsuariosService.prototype.editarUsuario = function (usuario, id) {
        return this.httpclient.put(this.vari3 + "/" + id, usuario, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        });
    };
    UsuariosService.prototype.getusuariouno = function (id) {
        return this.httpclient.get(this.vari2 + "/" + id);
    };
    UsuariosService.prototype.nuevousuario = function () {
        return {
            id: 0,
            nombre: '',
            apellidop: '',
            apellidom: '',
            tipo: '',
            username: '',
            email: '',
            password: ''
        };
    };
    UsuariosService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], UsuariosService);
    return UsuariosService;
}());
export { UsuariosService };
//# sourceMappingURL=usuarios.service.js.map