import { Component, OnInit } from '@angular/core';
import { CuestionariosService } from '../cuestionarios.service';
import { UsuariosService } from '../../usuarios/usuarios.service';
import { Cuestionario } from '../cuestionarios.model';
import { Cuestionariomod } from '../cuestionariomods.model';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { Pregunta } from '../preguntas.model';
import { FormBuilder,FormGroup,Validators,ReactiveFormsModule, FormControl } from '@angular/forms';


@Component({
  selector: 'app-editcuesmod',
  templateUrl: './editcuesmod.component.html',
  styleUrls: ['./editcuesmod.component.css']
})
export class EditcuesmodComponent implements OnInit {

  pregunta:Cuestionariomod;
  
  id:number ;
  id2:number = 0 ;
  myForm:FormGroup;

  constructor(
    private route:ActivatedRoute,
    private cuestionariosservice:CuestionariosService,
    private usuarioservice:UsuariosService,
    private router:Router,
    public fb:FormBuilder
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.id = +params.get('id');
      // this.id2 = +params.get('id2');
      console.log('mi id '+this.id);
    });

    this.myForm=this.fb.group({
      idtipocuestionario:['',Validators.required],
      preguntatxt:['',Validators.required],
      tiporespuesta:['',Validators.required]
    });
    
    this.pregunta = this.cuestionariosservice.nuevoeditcuestionariomodel();

    this.cuestionariosservice.getcuestionariomodeluno(this.id).
    subscribe(
      (usuario)=>{this.pregunta = usuario
      this.id2 = this.pregunta.idtipocuestionario;},
  (err:any) => console.log(err));

  }

  editarpregunta(id):void{
    this.cuestionariosservice.editarcuestionariomodel(this.pregunta,this.id).subscribe(
      (data: void)=>{
        console.log(data);
        this.router.navigate(['/agregarcuestionariomodel',this.id2]);
      },(error:any)=>console.log(error)
    );
    this.pregunta = this.cuestionariosservice.nuevoeditcuestionariomodel();
      }


}
