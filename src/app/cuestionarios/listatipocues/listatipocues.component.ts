import { Component, OnInit } from '@angular/core';
import { CuestionariosService } from '../cuestionarios.service';
import { Cuestionario } from '../cuestionarios.model';
import { TipoCuestionario } from '../tipocuestionarios.model';
import { UsuariosService } from '../../usuarios/usuarios.service';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../../usuarios/usuarios.model';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup,Validators,ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-listatipocues',
  templateUrl: './listatipocues.component.html',
  styleUrls: ['./listatipocues.component.css']
})
export class ListatipocuesComponent implements OnInit {

  cuestionario:TipoCuestionario[];
  cuestionario1:TipoCuestionario;
  usuarioprincipal;
  nombre:string;
  idcreador;
  myForm:FormGroup;
  

  constructor(
    private cuestionariosservice: CuestionariosService,
    private cuestionarioservice: CuestionariosService,
    private usuarioservice:UsuariosService,
     private router:Router,
    public fb:FormBuilder
  ) { }

  ngOnInit() {
    
      this.cuestionarioservice.gettipocuestionario().subscribe(data =>
        {this.cuestionario=data});
      this.nombre="auditorias";
    


    this.usuarioservice.Logininfo(localStorage.getItem('usuario')).subscribe(data2 =>
      this.usuarioprincipal=data2
     );
     this.myForm=this.fb.group({
      nombrecuestionario:['',Validators.required]
    });
    
    this.idcreador = localStorage.getItem('miid');
    console.log('yo soy '+this.idcreador );
    this.cuestionario1 = this.cuestionariosservice.nuevotipocuestionario();

  }

  eliminarquis(id){
    if(confirm("¿Está seguro de querer eliminar este cuestionario?")){
      this.cuestionarioservice.destruirtipocuestionario(id).subscribe(
        ()=> console.log(`Cuestionario with Id = ${id} deleted`),
            (err) => console.log(err)
      );
      
      window.location.reload();
    }
  }

  editarquis(id)
  {
    this.router.navigate(['/editartipocuestionario',id]); 
  }

  agregarquis(id)
  {
    this.router.navigate(['/agregarcuestionariomodel',id]); 
  }

  agregarcuestionario():void{
    
    this.cuestionarioservice.agregartipocuestionario(this.cuestionario1).subscribe(
      (data)=>{
        console.log(data);
      },(error:any)=>console.log(error)
    );
     this.cuestionario1 = this.cuestionarioservice.nuevotipocuestionario();
     window.location.reload();
     }

}
