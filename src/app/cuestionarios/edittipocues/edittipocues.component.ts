import { Component, OnInit } from '@angular/core';
import { CuestionariosService } from '../cuestionarios.service';
import { Cuestionario } from '../cuestionarios.model';
import { Usuario } from '../../usuarios/usuarios.model';
import { Empresa } from '../empresa.model';
import { UsuariosService } from '../../usuarios/usuarios.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder,FormGroup,Validators,ReactiveFormsModule, FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import { TipoCuestionario } from '../tipocuestionarios.model';

@Component({
  selector: 'app-edittipocues',
  templateUrl: './edittipocues.component.html',
  styleUrls: ['./edittipocues.component.css']
})
export class EdittipocuesComponent implements OnInit {

  empresa:Empresa[];
  cuestionario:TipoCuestionario;
  usuarios:Usuario[];
  id:number ; 
  myForm:FormGroup;

  mostrar:boolean=true;

  constructor(
    private route:ActivatedRoute,
    private cuestionariosservice:CuestionariosService,
    private usuarioservice:UsuariosService,
    private router:Router,
    public fb:FormBuilder
  ) { }

  ngOnInit() {


    this.myForm=this.fb.group({
      nombretipocuestionario:['',Validators.required]
    });
    
    this.cuestionario = this.cuestionariosservice.nuevotipocuestionario();

    this.route.paramMap.subscribe(params=>{
      this.id = +params.get('id');
      console.log('mi id '+this.id);
    
    });


    this.cuestionariosservice.gettipocuestionariouno(this.id).
    subscribe(
      (usuario)=>this.cuestionario = usuario,
  (err:any) => console.log(err));
    

  }

  editarcuestionario():void{
    this.cuestionariosservice.editartipocuestionario(this.cuestionario,this.id).subscribe(
      (data: void)=>{
        console.log(data);
        this.router.navigate(['/listatipocuestionario']);
      },(error:any)=>console.log(error)
    );
    this.cuestionario = this.cuestionariosservice.nuevotipocuestionario();
    
    
    
      }

}
