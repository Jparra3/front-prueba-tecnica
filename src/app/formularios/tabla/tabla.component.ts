import { Component, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Usuarios } from 'src/app/shared/usuarios';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { ModalNuevoUsuarioComponent } from '../modal-nuevo-usuario/modal-nuevo-usuario.component';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  data: Usuarios[] = [];
  @Output() valueChange = new EventEmitter();

  @Input() set setData(data: Usuarios[]){
    this.init(data);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['usuario','email','nombres','apellidos','estado','acciones'];
  // dataSource = null;
  public dataSource = new MatTableDataSource<Usuarios>([]);
  @ViewChild(MatPaginator) private paginator: MatPaginator;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  init(data: Usuarios[]): void{
    this.dataSource.data = data;
    this.dataSource.paginator = this.paginator;
  }

  modalVerEditarUsuario(data: any, readOnly: boolean, editable: boolean, index: any){
    const dialogConfig = new MatDialogConfig();
      dialogConfig.width = '90vw';
      dialogConfig.height = '80vh';
      dialogConfig.maxWidth = '90vw';
      dialogConfig.maxHeight = '80vh';
      dialogConfig.hasBackdrop = false;
      dialogConfig.data = {
        readOnly: readOnly,
        editable: editable,
        data: data,
        index: index
      };

      const dialogRef = this.dialog.open(ModalNuevoUsuarioComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(async (result) => {
        if(result.success){
          this.valueChange.emit({...result,  editable: editable, index: index});
        }
      });
  }

}
