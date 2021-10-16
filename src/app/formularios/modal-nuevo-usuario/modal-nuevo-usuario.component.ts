import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { Form } from 'src/app/shared/form';
import { Helpers } from 'src/app/shared/helpers';
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { Usuarios } from 'src/app/shared/usuarios';

@Component({
  selector: 'app-modal-nuevo-usuario',
  templateUrl: './modal-nuevo-usuario.component.html',
  styleUrls: ['./modal-nuevo-usuario.component.css']
})
export class ModalNuevoUsuarioComponent implements OnInit {

  dataControls = [
    {name: 'Activo', value: true},
    {name: 'Inactivo', value: false},
  ];

  form = new Form();
  helpers = new Helpers();

  constructor(
    private dialogRef: MatDialogRef<ModalNuevoUsuarioComponent>,
    private validations: ValidationsService
  ) { }

  ngOnInit(): void {
  }

  guardar(): void{
    if (!this.validate()) {
      return;
    }


  }

  close(success = false): void {
    const response = {success, data: []};
    this.dialogRef.close(response);
  }

  validate(): boolean{
    const responseValidate = this.validations.validateEmptyFields(this.form);
    if (!responseValidate.success) {
      return false;
    }

    const dataUsuario = {
      usuario: this.form.usuario.value,
      email: this.form.email.value,
      nombres: this.form.nombres.value,
      apellidos: this.form.apellidos.value,
      estado: this.form.estado.value,
    };

    this.dialogRef.close({success: true, data: dataUsuario});

    return true;
  }

}
