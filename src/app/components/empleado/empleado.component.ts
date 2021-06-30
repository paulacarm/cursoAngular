import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.sass']
})
export class EmpleadoComponent implements OnInit {
  habilitacionCuadro=false;
  registrado=false;
  empresa=""
 // textoRegistro="No hay nadie registrado"
  
  constructor() { }

  setUsuarioRegistrado(){
   this.registrado=!this.registrado
    //this.textoRegistro="el usuario se acaba de registrar"
  }
  ngOnInit(): void {
  }

}
