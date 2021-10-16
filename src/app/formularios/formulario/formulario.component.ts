import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/shared/usuarios';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  dataUsuarios: Usuarios[] = [
    {usuario: 'jopa', email: 'jhonatanjopa@gmail.com', nombres: 'Jhonatan', apellidos: 'Parra Almario', activo: true}
    ,{usuario: 'vivi', email: 'nanacas@gmail.com', nombres: 'Viviana', apellidos: 'Castaño Vega', activo: true}
    ,{usuario: 'jusevico', email: 'jusevico@gmail.com', nombres: 'Juan Sebastian', apellidos: 'Villegaz conde', activo: true}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
