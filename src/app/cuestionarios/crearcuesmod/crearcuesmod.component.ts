import { Component, OnInit, OnDestroy } from '@angular/core';
import { CuestionariosService } from '../cuestionarios.service';
import { UsuariosService } from '../../usuarios/usuarios.service';
import { Cuestionario } from '../cuestionarios.model';
import { TipoCuestionario } from '../tipocuestionarios.model';
import { Cuestionariomod } from '../cuestionariomods.model';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { Pregunta } from '../preguntas.model';

@Component({
  selector: 'app-crearcuesmod',
  templateUrl: './crearcuesmod.component.html',
  styleUrls: ['./crearcuesmod.component.css']
})
export class CrearcuesmodComponent implements OnInit, OnDestroy {
 

  id:number ;
  nombrecuestionario:string;
  pregunta:Pregunta;

  cuestionariomodel:Cuestionariomod[];

  cuestionario:Cuestionariomod;
  usuarioprincipal;
  lista;
  variablesen = '';
  idelcuestionario:number =0;
   
  seleccionarnum: string='';
  numeros: any=['5','4','3','2','1'];

  


  constructor(
    private route:ActivatedRoute,
    private cuestionariosservice:CuestionariosService,
    private usuarioservice:UsuariosService,
    private router:Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.id = +params.get('id');
      console.log('mi id '+this.id);
      // this.lista = 'listapreguntas'+this.id;
    });

    this.cuestionario = this.cuestionariosservice.nuevocuestionariomodel(this.id);

    this.cuestionariosservice.getcuestionariomodel(this.id).subscribe(data =>
      {this.cuestionariomodel=data
      });

      this.usuarioservice.Logininfo(localStorage.getItem('usuario')).subscribe(data2 =>
        this.usuarioprincipal=data2);

  }

     agregarpregunta():void{
    
      this.cuestionariosservice.agregacuestionariomodel(this.cuestionario).subscribe(
        (data)=>{
          console.log(data);
          this.asyncMethod();
        },(error:any)=>console.log(error));
        this.cuestionario = this.cuestionariosservice.nuevocuestionariomodel(this.id);

       }

       async asyncMethod() {

        this.cuestionariosservice.getcuestionariomodel(this.id).subscribe(data =>
          {this.cuestionariomodel=data
            this.variablesen = '12';
          });

  
           }

           eliminarpregunta(id)
           {
         this.cuestionariosservice.destruircuestionariomodel(id).subscribe(
           ()=> console.log(`Cuestionario with Id = ${id} deleted`),
               (err) => console.log(err)
         );
             
             window.location.reload();
           }
         
           editarpregunta(id)
           {
             this.router.navigate(['/editarcuestionariomodel',id]); 
           }
         


  ngOnDestroy(): void {
    // throw new Error("Method not implemented.");
  }

}
