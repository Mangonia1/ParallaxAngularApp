import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Usuario } from '../usuarios.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listasoloclientes',
  templateUrl: './listasoloclientes.component.html',
  styleUrls: ['./listasoloclientes.component.css']
})
export class ListasoloclientesComponent implements OnInit, OnDestroy {

  usuarios:Usuario[];
  usuarios2:Usuario[];
  usuarioprincipal;
  lista = 'listausurios';
  lista2 = 'listausurios2';

  constructor(
    private usuarioservice: UsuariosService,
     private router:Router
  ) { }

  ngOnInit() {
    this.usuarioservice.getusuario().subscribe(data =>{
      this.usuarios=data
      // this.usuarioservice.enviarMensaje(data,this.lista);
    });


    this.usuarioservice.getusuariosinempresa().subscribe(data =>{
      this.usuarios2=data
   
    });
  }

  eliminarMono(id)
  {
     
this.usuarioservice.destruirUsuario(id).subscribe(
  ()=> console.log(`Usuario with Id = ${id} deleted`),
      (err) => console.log(err)
);
    
    window.location.reload();
  }

  editarMono(id)
  {
    this.router.navigate(['/editarusuario',id]);
    
  }

  ngOnDestroy(): void {
   // this.usuarioservice.cerrar(1);
  }

}
