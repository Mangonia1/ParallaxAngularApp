import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
var FormularioeditarComponent = /** @class */ (function () {
    function FormularioeditarComponent(route, usuariosservice, router) {
        this.route = route;
        this.usuariosservice = usuariosservice;
        this.router = router;
    }
    FormularioeditarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usuario = this.usuariosservice.nuevousuario();
        this.route.paramMap.subscribe(function (params) {
            _this.id = +params.get('id');
            console.log('mi id ' + _this.id);
        });
        //   this.usuariosservice.getusuariouno(this.id).
        //   subscribe(
        //     (usuario)=>this.usuario = usuario
        //     ,
        // (err:any) => console.log(err));
    };
    FormularioeditarComponent.prototype.editarusuario = function () {
        this.usuariosservice.editarUsuario(this.usuario, this.id).subscribe(function (data) {
            console.log(data);
        }, function (error) { return console.log(error); });
        this.usuario = this.usuariosservice.nuevousuario();
        this.router.navigate(['/']);
    };
    FormularioeditarComponent = tslib_1.__decorate([
        Component({
            selector: 'app-formularioeditar',
            templateUrl: './formularioeditar.component.html',
            styleUrls: ['./formularioeditar.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            UsuariosService,
            Router])
    ], FormularioeditarComponent);
    return FormularioeditarComponent;
}());
export { FormularioeditarComponent };
//# sourceMappingURL=formularioeditar.component.js.map