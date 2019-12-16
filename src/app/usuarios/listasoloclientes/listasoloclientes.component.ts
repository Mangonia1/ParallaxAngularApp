import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Usuario } from '../usuarios.model';
import { Router } from '@angular/router';
import { Empresa } from 'src/app/cuestionarios/empresa.model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CuestionariosService } from 'src/app/cuestionarios/cuestionarios.service';

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
  mostrar:boolean = true;

  empresa:Empresa[];
  usuario:Usuario;
  myForm:FormGroup;

  constructor(
    private usuarioservice: UsuariosService,
    private router:Router,
    private cuestionarioservice: CuestionariosService,
    public fb:FormBuilder
  ) { }

  ngOnInit() {
    this.usuarioservice.getusuario().subscribe(data =>{
      this.usuarios=data
      // this.usuarioservice.enviarMensaje(data,this.lista);
    });


    this.usuarioservice.getusuariosinempresa().subscribe(data =>{
      this.usuarios2=data
   
    });
    
    this.myForm = this.fb.group({
      nombre:['',Validators.required],
      apellidop:['',Validators.required],
      apellidom:['',Validators.required],
      tipo:['',Validators.required],
      username:['',Validators.required],
      idempresa:['',Validators.required],
      email:['',[Validators.email,Validators.required]],
      password:['',Validators.required]
    });

    this.cuestionarioservice.getEmpresa().subscribe(data =>this.empresa=data);

    this.usuario = this.usuarioservice.nuevousuario();
  }

  eliminarMono(id){
    if(confirm("¿Está seguro de querer eliminar a este usuario?")) {
      this.usuarioservice.destruirUsuario(id).subscribe(
        ()=> {
          console.log(`Usuario with Id = ${id} deleted`)
          window.location.reload();
        },
        (err) => console.log(err)
      );
    }
  }

  editarMono(id)
  {
    this.router.navigate(['/editarusuario',id]);
    
  }

  ngOnDestroy(): void {
   // this.usuarioservice.cerrar(1);
  }

  agregarusuario():void{
    this.usuarioservice.agregarUsuario(this.usuario).subscribe(
      (data)=>{
        console.log(data);
        window.location.reload();
      },(error:any)=>console.log(error)
    );
    this.usuario = this.usuarioservice.nuevousuario();
  }

}
