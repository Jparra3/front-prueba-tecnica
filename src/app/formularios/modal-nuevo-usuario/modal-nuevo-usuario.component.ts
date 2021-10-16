import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog';
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

  readOnly: boolean= false;
  editable: boolean= false;
  id = null;

  dataControls = [
    {name: 'Activo', value: true},
    {name: 'Inactivo', value: false},
  ];

  form = new Form();
  helpers = new Helpers();

  constructor(
    private dialogRef: MatDialogRef<ModalNuevoUsuarioComponent>,
    private validations: ValidationsService,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    const request = data;
    this.editable = false;
    if(request.readOnly != undefined){
      this.readOnly = request.readOnly;
      this.editable = request.editable;
      this.form.email.value = request.data.email;
      this.form.usuario.value = request.data.usuario;
      this.form.nombres.value = request.data.nombres;
      this.form.apellidos.value = request.data.apellidos;
      this.form.estado.value = request.data.estado;
      this.id = request.index;
    }else{
      this.form.email.value = null;
      this.form.usuario.value = null;
      this.form.nombres.value = null;
      this.form.apellidos.value = null;
      this.form.estado.value = null;
    }
  }

  ngOnInit(): void {
  }

  guardar(): void{
    if (!this.validate()) {
      return;
    }

    const dataUsuario = {
      usuario: this.form.usuario.value,
      email: this.form.email.value,
      nombres: this.form.nombres.value,
      apellidos: this.form.apellidos.value,
      estado: this.form.estado.value,
    };

    this.dialogRef.close({success: true, data: dataUsuario, editable: this.editable, id: this.id});
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
    return true;
  }

}
