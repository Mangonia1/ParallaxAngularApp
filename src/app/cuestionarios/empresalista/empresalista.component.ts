import { Component, OnInit } from '@angular/core';
import { CuestionariosService } from '../cuestionarios.service';
import { Empresa } from '../empresa.model';
import { UsuariosService } from '../../usuarios/usuarios.service';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../../usuarios/usuarios.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-empresalista',
  templateUrl: './empresalista.component.html',
  styleUrls: ['./empresalista.component.css']
})
export class EmpresalistaComponent implements OnInit {

  empresas:Empresa[];
  mostrar:boolean = true;
  empresa:Empresa;
  myForm:FormGroup;
  
  usuarioprincipal;
  nombre:string;

  constructor(
    private cuestionarioservice: CuestionariosService,
    private usuarioservice:UsuariosService,
    public fb:FormBuilder,
    private router:Router
  ) { }

  ngOnInit() {
    this.cuestionarioservice.getEmpresa()
    .subscribe(data =>this.empresas = data);

    this.usuarioservice.Logininfo(localStorage.getItem('usuario')).subscribe(data2 =>
      this.usuarioprincipal=data2
     );
     this.myForm=this.fb.group({
      nombre:['',Validators.required],
      giro:['',Validators.required]
    });
    this.empresa = this.cuestionarioservice.nuevoempresa();
  }

  eliminarempresa(id){
    if(confirm("¿Está seguro de querer eliminar a esta empresa?")){
      this.cuestionarioservice.destruirEmpresa(id).subscribe(
        ()=> console.log(`Empresa with Id = ${id} deleted`),
            (err) => console.log(err)
      );
      
      window.location.reload();
    }
  }

  editarempres(id)
  {
    this.router.navigate(['/editarempresa',id]); 
  }

  agregarempresa():void{
    this.cuestionarioservice.agregarEmpresa(this.empresa).subscribe(
      (data)=>{
        console.log(data);
      },(error:any)=>console.log(error)
    );
    this.empresa = this.cuestionarioservice.nuevoempresa();
    window.location.reload();
  }

}
