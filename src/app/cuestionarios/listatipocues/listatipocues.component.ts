import { Component, OnInit } from '@angular/core';
import { CuestionariosService } from '../cuestionarios.service';
import { Cuestionario } from '../cuestionarios.model';
import { TipoCuestionario } from '../tipocuestionarios.model';
import { UsuariosService } from '../../usuarios/usuarios.service';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../../usuarios/usuarios.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listatipocues',
  templateUrl: './listatipocues.component.html',
  styleUrls: ['./listatipocues.component.css']
})
export class ListatipocuesComponent implements OnInit {

  cuestionario:TipoCuestionario[];
  
  usuarioprincipal;
  nombre:string;

  constructor(
    private cuestionarioservice: CuestionariosService,
    private usuarioservice:UsuariosService,
     private router:Router
  ) { }

  ngOnInit() {
    
      this.cuestionarioservice.gettipocuestionario().subscribe(data =>
        {this.cuestionario=data});
      this.nombre="auditorias";
    


    this.usuarioservice.Logininfo(localStorage.getItem('usuario')).subscribe(data2 =>
      this.usuarioprincipal=data2
     );

  }

  eliminarquis(id)
  {
this.cuestionarioservice.destruirtipocuestionario(id).subscribe(
  ()=> console.log(`Cuestionario with Id = ${id} deleted`),
      (err) => console.log(err)
);
    
    window.location.reload();
  }

  editarquis(id)
  {
    this.router.navigate(['/editartipocuestionario',id]); 
  }

  agregarquis(id)
  {
    this.router.navigate(['/agregarcuestionariomodel',id]); 
  }

}
