import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-nuevo-usuario',
  templateUrl: './modal-nuevo-usuario.component.html',
  styleUrls: ['./modal-nuevo-usuario.component.css']
})
export class ModalNuevoUsuarioComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ModalNuevoUsuarioComponent>
  ) { }

  ngOnInit(): void {
  }

  close(success = false): void {
    const response = {success, data: []};
    this.dialogRef.close(response);
  }

}
