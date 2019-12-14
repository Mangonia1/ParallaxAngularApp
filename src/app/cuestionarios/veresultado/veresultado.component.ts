import { Component, OnInit , OnDestroy} from '@angular/core';
import { CuestionariosService } from '../cuestionarios.service';
import { Cuestionario } from '../cuestionarios.model';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { Pregunta } from '../preguntas.model';
import { UsuariosService } from '../../usuarios/usuarios.service';
import { FormBuilder,FormGroup,Validators,ReactiveFormsModule, FormControl } from '@angular/forms';
import * as jsPDF from 'jspdf';
 import html2canvas from 'html2canvas'; 

@Component({
  selector: 'app-veresultado',
  templateUrl: './veresultado.component.html',
  styleUrls: ['./veresultado.component.css']
})
export class VeresultadoComponent implements OnInit, OnDestroy {

  id:number ;
  id2;
  nombrecuestionario:string;
  pregunta:Pregunta;
  cuestionario:Cuestionario;
  preguntas:Pregunta[];
  arrespuestas:[];
  respuesta;
  lista;

  cuesaudi='';
  cuesnomempresa='';
  cuesnomauditor='';
  cuesnomarea='';
  cuesfecha = '';
  cuesresultado = '';

  usuarioprincipal;

  constructor(
    private route:ActivatedRoute,
    private cuestionariosservice:CuestionariosService,
    private router:Router,
    private usuarioservice:UsuariosService,
    public fb:FormBuilder
  ) { }

  ngOnInit() {
    this.preguntas=[];
    this.route.paramMap.subscribe(params=>{
      this.id = +params.get('id');
      
      console.log('mi id '+this.id+' mi id2 '+this.id2);
      this.lista = 'listavermisresultados'+this.id;
      this.pregunta = this.cuestionariosservice.nuevopregunta2();
    });
  
     this.cuestionariosservice.suscribir3(this.lista);
    this.usuarioservice.Logininfo(localStorage.getItem('usuario')).subscribe(data2 =>
      this.usuarioprincipal=data2
     );


    this.cuestionario = this.cuestionariosservice.nuevocuestionarioedit();
    
    this.cuestionariosservice.getCuestionariouno(this.id).
    subscribe(
      (usuario)=>{this.cuestionario = usuario
      this.cuesaudi = this.cuestionario.nombrecuestionario;
      this.cuesnomempresa = this.cuestionario.empresa;
      this.cuesnomauditor = this.cuestionario.usernameauditor;
      this.cuesnomarea = this.cuestionario.departamento;
       this.cuesfecha = this.cuestionario.updated_at;
       this.cuesresultado = this.cuestionario.resultado;
        this.cuestionariosservice.enviarMensaje3(usuario,this.lista);
      },
  (err:any) => console.log(err));


// Esto es un current message---------------------------------------------
this.cuestionariosservice.currentMessage3.subscribe(message =>{
  this.cuestionario.resultado = message
  });

    this.cuestionariosservice.getpreguntaresultado(localStorage.getItem('miid'),
    localStorage.getItem('username'),this.id).subscribe(data =>
      {this.preguntas=data
      });



    }

    resultadocuestionario():void{
      this.cuestionariosservice.resultadodelquestion(this.cuestionario,this.id).subscribe(
        (data: void)=>{
          console.log(data);
          this.asyncMethod();
          this.router.navigate(['/veresultado/',this.id]);
        },(error:any)=>console.log(error)
      );
       this.cuestionario = this.cuestionariosservice.nuevocuestionarioedit();
        }

        async asyncMethod() {
          this.cuestionariosservice.getCuestionariouno(this.id).
          subscribe(
            (usuario)=>{this.cuestionario = usuario
              this.cuesresultado = this.cuestionario.resultado;
              this.cuestionariosservice.enviarMensaje3(usuario,this.lista);
            },
        (err:any) => console.log(err));
      
      
      // Esto es un current message---------------------------------------------
      this.cuestionariosservice.currentMessage3.subscribe(message =>{
        this.cuestionario.resultado = message
        });
    
             }


  generar()  
  {
   
    // console.log('mira entrooo');
    var data = document.getElementById('listainfo');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
    var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/jpeg')  
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'JPEG', 0, position, imgWidth, imgHeight)  
      pdf.save('reporte.pdf'); // Generated PDF   
    });   

  }  

  ngOnDestroy(): void {
    this.cuestionariosservice.cerrar3(1);
  }

}
