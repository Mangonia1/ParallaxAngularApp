import { Component, OnInit } from '@angular/core';
import { CuestionariosService } from '../cuestionarios.service';
import { UsuariosService } from '../../usuarios/usuarios.service';
import { Cuestionario } from '../cuestionarios.model';
import { Empresa } from '../empresa.model';
import { Usuario } from '../../usuarios/usuarios.model';
import { FormBuilder,FormGroup,Validators,ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulariocuestionario',
  templateUrl: './formulariocuestionario.component.html',
  styleUrls: ['./formulariocuestionario.component.css']
})
export class FormulariocuestionarioComponent implements OnInit {

  empresa:Empresa[];
  cuestionario:Cuestionario;
  usuarios:Usuario[];
  idcreador;
  myForm:FormGroup;

  constructor(
 
  ) { }

  ngOnInit() {

   
  }

 

}
