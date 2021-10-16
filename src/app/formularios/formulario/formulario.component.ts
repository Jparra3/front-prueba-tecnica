import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuarios } from 'src/app/shared/usuarios';
import { TablaComponent } from '../tabla/tabla.component';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @ViewChild(TablaComponent) tablaComponent!: TablaComponent;

  dataUsuarios: Usuarios[] = [
    {usuario: 'jopa', email: 'jhonatanjopa@gmail.com', nombres: 'Jhonatan', apellidos: 'Parra Almario', estado: true}
    ,{usuario: 'vivi', email: 'nanacas@gmail.com', nombres: 'Viviana', apellidos: 'Castaño Vega', estado: true}
    ,{usuario: 'jusevico', email: 'jusevico@gmail.com', nombres: 'Juan Sebastian', apellidos: 'Villegaz conde', estado: true}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  setDataUsuarios (value: any): void{
    if(value.success){

      if(value.editable){
        this.dataUsuarios[value.index].usuario = value.data.usuario;
        this.dataUsuarios[value.index].email = value.data.email;
        this.dataUsuarios[value.index].nombres = value.data.nombres;
        this.dataUsuarios[value.index].apellidos = value.data.apellidos;
        this.dataUsuarios[value.index].estado = value.data.estado;

      }else{
        this.dataUsuarios.push(value.data);
      }

      this.tablaComponent.init(this.dataUsuarios);
    }
  }

}
