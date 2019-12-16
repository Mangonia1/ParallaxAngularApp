import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios/usuarios.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  usuarioprincipal;

  constructor(private usuarioservice:UsuariosService) { }

  ngOnInit() {
    this.usuarioservice.Logininfo(localStorage.getItem('usuario')).subscribe(data2 =>
      this.usuarioprincipal=data2
     );
  }

}
