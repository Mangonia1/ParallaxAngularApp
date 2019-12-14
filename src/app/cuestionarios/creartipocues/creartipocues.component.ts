import { Component, OnInit } from '@angular/core';
import { CuestionariosService } from '../cuestionarios.service';
import { UsuariosService } from '../../usuarios/usuarios.service';
import { Cuestionario } from '../cuestionarios.model';
import { TipoCuestionario } from '../tipocuestionarios.model';
import { Empresa } from '../empresa.model';
import { Usuario } from '../../usuarios/usuarios.model';
import { FormBuilder,FormGroup,Validators,ReactiveFormsModule, FormControl } from '@angular/forms';


@Component({
  selector: 'app-creartipocues',
  templateUrl: './creartipocues.component.html',
  styleUrls: ['./creartipocues.component.css']
})
export class CreartipocuesComponent implements OnInit {


  cuestionario:TipoCuestionario;
  idcreador;
  myForm:FormGroup;

  constructor(
    private cuestionariosservice:CuestionariosService,
    private usuarioservice:UsuariosService,
    public fb:FormBuilder
  ) { }

  ngOnInit() {

    this.myForm=this.fb.group({
      nombrecuestionario:['',Validators.required]
    });
    
    this.idcreador = localStorage.getItem('miid');
    console.log('yo soy '+this.idcreador );
    this.cuestionario = this.cuestionariosservice.nuevotipocuestionario();
  }

  agregarcuestionario():void{
    
    this.cuestionariosservice.agregartipocuestionario(this.cuestionario).subscribe(
      (data)=>{
        console.log(data);
      },(error:any)=>console.log(error)
    );
     this.cuestionario = this.cuestionariosservice.nuevotipocuestionario();
     }

}
