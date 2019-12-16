import { Component, OnInit } from '@angular/core';
import { CuestionariosService } from '../cuestionarios.service';
import { Cuestionario } from '../cuestionarios.model';
import { UsuariosService } from '../../usuarios/usuarios.service';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../../usuarios/usuarios.model';
import { Router } from '@angular/router';
import { Empresa } from '../empresa.model';
import { FormBuilder,FormGroup,Validators,ReactiveFormsModule, FormControl } from '@angular/forms';
@Component({
  selector: 'app-listacuestionario',
  templateUrl: './listacuestionario.component.html',
  styleUrls: ['./listacuestionario.component.css']
})
export class ListacuestionarioComponent implements OnInit {

  cuestionario:Cuestionario[];
  
  usuarioprincipal;
  nombre:string;

  constructor(
    private cuestionarioservice: CuestionariosService,
    private usuarioservice:UsuariosService,
     private router:Router,
     private cuestionariosservice:CuestionariosService,     
     public fb:FormBuilder
  ) { }
  empresa:Empresa[];
  cuestionario2:Cuestionario;
  cuestionario3:Cuestionario;
  usuarios:Usuario[];
  idcreador;
  myForm:FormGroup;
  myForm2:FormGroup;
  nombrecuestionario;
  departamento;
  usernameauditor;
  id:number ; 
  ngOnInit() {

    

    if(localStorage.getItem('tipo') == 'Administrador')
    {
      this.cuestionarioservice.getCuestionarioadmin().subscribe(data =>this.cuestionario=data);
    this.nombre="auditorias";
    }
    else{
      console.log('mi id: '+localStorage.getItem('miid')+' mi username: '+localStorage.getItem('username'));
      this.cuestionarioservice.getCuestionario(localStorage.getItem('miid'),
      localStorage.getItem('username')).subscribe(data =>this.cuestionario=data);
      this.nombre="auditorias";
    }


    this.usuarioservice.Logininfo(localStorage.getItem('usuario')).subscribe(data2 =>{
      this.usuarioprincipal=data2
    }
     );
     
     this.cuestionariosservice.getEmpresa()
     .subscribe(data =>this.empresa=data);
 
     this.myForm=this.fb.group({
       nombrecuestionario:['',Validators.required],
       empresa:['',Validators.required],
       departamento:['',Validators.required],
       idcreador:['',Validators.required],
       usernameauditor:['',Validators.required]
     });
     this.myForm2=this.fb.group({
      nombrecuestionario:['',Validators.required],
      empresa:['',Validators.required],
      departamento:['',Validators.required],
      idcreador:['',Validators.required],
      usernameauditor:['',Validators.required]
    });
     
     this.idcreador = localStorage.getItem('miid');
     console.log('yo soy '+this.idcreador );
 
     this.cuestionario2 = this.cuestionariosservice.nuevocuestionario(this.idcreador);
     this.cuestionario3 = this.cuestionariosservice.nuevocuestionarioedit();
     this.usuarioservice.getusuariosinempresa().subscribe(data =>this.usuarios=data);
 
 
    
  }

  agregarcuestionario():void{
    
    this.cuestionariosservice.agregarCuestionario(this.cuestionario).subscribe(
      (data)=>{
        console.log(data);
        location.reload();
      },(error:any)=>console.log(error)
    );
     this.cuestionario2 = this.cuestionariosservice.nuevocuestionario(this.idcreador);
  
     }

  
  eliminarquis(id)
  {
this.cuestionarioservice.destruirCuestionario(id).subscribe(
  ()=> console.log(`Cuestionario with Id = ${id} deleted`),
      (err) => console.log(err)
);
    
    window.location.reload();
  }

  editarquis(id)
  {
    this.router.navigate(['/editarcuestionario',id]); 
  }

  agregarpregunta(id,nombre)
  {
    this.router.navigate(['/agregarpregunta',id]); 
  }

  responderquiss(id,nombre)
  {
    this.router.navigate(['/responderpregunta',id]); 
  }

  veresul(id,nombre)
  {
    this.router.navigate(['/veresultado',id]); 
  }

  calificarquiss(id)
  {
    this.router.navigate(['/listacalificar',id]); 
  }


  pasarInfo(request,idreq)
  {
    this.id = idreq;
    this.cuestionario3.nombrecuestionario = request.nombrecuestionario;
    this.cuestionario3.empresa= request.empresa;
    this.cuestionario3.departamento= request.departamento;
    this.cuestionario3.idcreador= request.creador;
    this.cuestionario3.usernameauditor= request.usernameauditor;
    this.cuestionariosservice.getCuestionariouno(this.id).
    subscribe(
      (usuario)=>this.cuestionario3 = usuario,
  (err:any) => console.log(err));
  }


  editarcuestionario():void{
    this.cuestionariosservice.editarCuestionario(this.cuestionario3,this.id).subscribe(
      (data: void)=>{
        
      },(error:any)=>console.log(error)
    );
    this.cuestionario3 = this.cuestionariosservice.nuevocuestionarioedit();
 
    
    
      }
  
}
