import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/usuarios/usuarios.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(navegar, usuarioservice) {
        this.navegar = navegar;
        this.usuarioservice = usuarioservice;
        // cerrarSesion(){
        //   localStorage.removeItem('token');
        //   localStorage.removeItem('usuario');
        //   localStorage.removeItem('miid');
        //   localStorage.removeItem('tipo');
        //   //  localStorage.removeItem('channel');
        //   alert('Sesion cerrada');
        //   this.navegar.navigate(['']);
        //   window.location.reload();
        // }
        this.title = 'auditoriapp';
    }
    AppComponent.prototype.ngOnInit = function () {
        // console.log('no seas tan credulo mcfly  '+localStorage.getItem('usuario'));
        // this.usuarioservice.Logininfo(localStorage.getItem('usuario')).subscribe(data2 =>
        //     this.usuarioprincipal=data2
        //    );
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            UsuariosService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map