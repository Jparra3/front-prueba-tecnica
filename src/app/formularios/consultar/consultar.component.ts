import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Helpers } from 'src/app/shared/helpers';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { ModalNuevoUsuarioComponent } from '../modal-nuevo-usuario/modal-nuevo-usuario.component';
import {Form} from 'src/app/shared/form'
@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  helpers = new Helpers();
  @Output() valueChange = new EventEmitter();

  form = new Form();

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openModalRegistro(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '90vw';
    dialogConfig.height = '50vh';
    dialogConfig.maxWidth = '90vw';
    dialogConfig.maxHeight = '50vh';
    dialogConfig.hasBackdrop = false;
    dialogConfig.data = {};

    const dialogRef = this.dialog.open(ModalNuevoUsuarioComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(async (result) => {
      if(result != undefined){
        if (result.success) {
          this.valueChange.emit(['reload', result.data]);
        }
      }
    });
  }

}
