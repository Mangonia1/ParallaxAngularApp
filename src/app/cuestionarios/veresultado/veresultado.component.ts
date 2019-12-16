import { Component, OnInit , OnDestroy} from '@angular/core';
import { CuestionariosService } from '../cuestionarios.service';
import { Cuestionario } from '../cuestionarios.model';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { Pregunta } from '../preguntas.model';
import { UsuariosService } from '../../usuarios/usuarios.service';
import { FormBuilder,FormGroup,Validators,ReactiveFormsModule, FormControl } from '@angular/forms';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
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


  generar(){
    var headRows = function headRows() {
        return [{ No: '#', Reactivo: 'Pregunta', Respuesta: 'Respuesta' }];
    }

    var p = this.preguntas;
    var bodyRows = function bodyRows() {
      let body = [];
      for (var j = 1; j <= p.length; j++) {
          body.push({
              No: j,
              Reactivo: p[(j - 1)].preguntatxt,
              Respuesta: p[(j - 1)].respuesta,
          });
      }
      return body;
    }

    let doc = new jsPDF;
    var totalPagesExp = '{total_pages_count_string}';

    // variables para usarse dentro del documento
    var empresa = this.cuesnomempresa;
    var fecha = this.cuesfecha;
    var auditor = this.cuesnomauditor;
    var resultado = this.cuesresultado;

    doc.autoTable({
      head: headRows(),
      body: bodyRows(),
      styles: {
          overflow: 'linebreak',
      },
      columnStyles: { 0: { columnWidth: 8 }, 1: { columnWidth: 110 } },
      didDrawPage: function(data) {
          // Header
          doc.setFontSize(15);
          doc.setTextColor(40);
          doc.setFontStyle('normal');

          doc.text("Parallax Auditorías", data.settings.margin.left + 65, 10);
          doc.setFontSize(10);
          doc.text(`Fecha de realización: `+ fecha, data.settings.margin.left + 5, 18);
          doc.text(`Reporte de auditoria a la empresa `+ empresa, data.settings.margin.left + 5, 22);
          doc.text(`Auditor: `+auditor, data.settings.margin.left + 5, 26);

          doc.text(`Resultado de la auditoría: `+resultado, data.settings.margin.left + 5, 30);
          // Footer
          var str = "Página " + doc.internal.getNumberOfPages()
              // Total page number plugin only available in jspdf v1.0+
          if (typeof doc.putTotalPages === 'function') {
              str = str + " of " + totalPagesExp;
          }
          doc.setFontSize(10);

          // jsPDF 1.4+ uses getWidth, <1.4 uses .width
          var pageSize = doc.internal.pageSize;
          var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
          doc.text(str, data.settings.margin.left, pageHeight - 10);
      },
      margin: { top: 40 }
    });


    // Total page number plugin only available in jspdf v1.0+
    if (typeof doc.putTotalPages === 'function') {
      doc.putTotalPages(totalPagesExp);
    }

    doc.save(`${this.cuesnomempresa}.pdf`);
  }  

  ngOnDestroy(): void {
    this.cuestionariosservice.cerrar3(1);
  }

}
