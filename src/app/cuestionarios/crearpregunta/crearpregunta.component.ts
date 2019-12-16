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
  selector: 'app-crearpregunta',
  templateUrl: './crearpregunta.component.html',
  styleUrls: ['./crearpregunta.component.css']
})
export class CrearpreguntaComponent implements OnInit, OnDestroy {
 

  id:number ;
  nombrecuestionario:string;
  pregunta:Pregunta;

  tipocuestionarios:TipoCuestionario[];
  // tipocuestionario:TipoCuestionario[];
  cuestionariomodel:Cuestionariomod[];

  cuestionario:Cuestionario;
  preguntas:Pregunta[];
  usuarioprincipal;
  lista;
  variablesen = '';
  idelcuestionario:number =0;
   
  seleccionarnum: string='';
  numeros: any=['5','4','3','2','1'];

radioChangeHandler (event: any)
{
this.seleccionarnum = event.target.value;
}

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
      this.lista = 'listapreguntas'+this.id;
    });



    this.cuestionariosservice.suscribir(this.lista);



    this.cuestionariosservice.getCuestionariouno(this.id).
    subscribe((usuario)=>{this.cuestionario = usuario
      console.log('mira '+this.cuestionario.terminareditarcuestionario);
      if (this.cuestionario.terminareditarcuestionario === 1)
  {


// ====================PARA HACER EL SELECT=========================================
this.variablesen = '';

this.cuestionariosservice.nuevotipocuestionario();
this.cuestionariosservice.gettipocuestionario().subscribe(data =>
  {this.tipocuestionarios=data

  });
//  ===================PARA HACER EL SELECT==========================================



      this.cuestionariosservice.getPreguntavisible(this.id).subscribe(data =>
        {this.preguntas=data
          this.cuestionariosservice.enviarMensaje(data,this.lista);
        });


            // Esto es un current message---------------------------------------------
            this.cuestionariosservice.currentMessage.subscribe(message =>{
            this.preguntas = message
            });



    this.pregunta = this.cuestionariosservice.nuevopregunta(this.id);
  this.usuarioservice.Logininfo(localStorage.getItem('usuario')).subscribe(data2 =>
    this.usuarioprincipal=data2
   );
  }
  else{console.log('no');
    this.router.navigate(['/listacuestionario']); 
      }

    },(err:any) => console.log(err));
      
 
  }


  verpreguntas():void{
    console.log('se va a desplegar del id '+this.id);
    this.cuestionariosservice.getcuestionariomodel(this.id).subscribe(data =>
      {this.cuestionariomodel=data
        this.variablesen = '12';
      });
     }

     terminarformu():void
     {
       this.verpreguntas();
   var arrayinput = new Array();
       var inputsValue = document.getElementsByClassName(' datoInput'),
       nameValues = [].map.call(inputsValue, function( dataInput){
   arrayinput.push(dataInput.value);
       });
   
       var arrayinput2 = new Array();
       var inputsValue2 = document.getElementsByClassName(' datoInput2'),
       nameValues2 = [].map.call(inputsValue2, function( dataInput2){
   arrayinput2.push(dataInput2.value);
       });
       
   for(var j=0; j< arrayinput.length;j++ )
   {
   
    this.cuestionariosservice.agregarPreguntaconstilo(this.id,arrayinput[j],arrayinput2[j]).subscribe(
      (data)=>{
        console.log(data);
        // this.asyncMethod();
        console.log(' respuesta '+arrayinput[j]+' tiporespuesta '+arrayinput2[j]);
      },(error:any)=>console.log(error));
      
   }
         
   this.asyncMethod();
     }


  eliminarpregunta(id)
  {
this.cuestionariosservice.destruirpregunta(id).subscribe(
  ()=> console.log(`Cuestionario with Id = ${id} deleted`),
      (err) => console.log(err)
);
    
    window.location.reload();
  }

  editarpregunta(id)
  {
    this.router.navigate(['/editarpregunta',id,this.id]); 
  }


  agregarpregunta():void{
    
    this.cuestionariosservice.agregarPregunta(this.pregunta).subscribe(
      (data)=>{
        console.log(data);
        this.asyncMethod();

      },(error:any)=>console.log(error));


     this.pregunta = this.cuestionariosservice.nuevopregunta(this.id);


     //window.location.reload();

     }


     async asyncMethod() {

      this.cuestionariosservice.terminareditarcues(this.id).subscribe(
        ()=> {console.log(`Cuestionario with Id = ${this.id} deleted`)
        this.router.navigate(['/listacuestionario']); 
      },
            (err) => console.log(err));

         }



     terminareditarquis():void{

      this.cuestionariosservice.terminareditarcues(this.id).subscribe(
        ()=> {console.log(`Cuestionario with Id = ${this.id} deleted`)
        this.router.navigate(['/listacuestionario']); 
      },
            (err) => console.log(err)
      );
     
     }

     ngOnDestroy(): void {
      this.cuestionariosservice.cerrar(1);
    }

}
