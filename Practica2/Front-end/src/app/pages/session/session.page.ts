import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import {AutenticacionService} from '../../services/autenticacion.service';
@Component({
  selector: 'app-session',
  templateUrl: './session.page.html',
  styleUrls: ['./session.page.scss'],
})
export class SessionPage implements OnInit {
  formulario:FormGroup;
  mensaje:string="";
  logueado=false;

  constructor(private form:FormBuilder, private servicio:AutenticacionService) {
    this.formulario=this.form.group({
      usuario:['',[Validators.required, Validators.email]],
      password:['',Validators.required],
      //rut: ['', [Validators.pattern("[0-9]-"),Validators.max(9)]]
    });
   }

  ngOnInit() {

  }

  ValidarLogin(){
  
    if(this.formulario.get("usuario")?.value=='pepito' && this.formulario.get("password")?.value=='123'){
      this.mensaje="usuario exite";
    }
     
    this.servicio.IniciarSesion(this.formulario.get("usuario")?.value,this.formulario.get("password")?.value).subscribe(data=>{
       console.log(data);
    });


  }
}
