import { Component, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { Usuarios } from 'src/app/shared/usuarios';
// const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  data: Usuarios[] = [];

  @Input() set setData(data: Usuarios[]){
    // console.log(data);
    this.init(data);
  }

  displayedColumns: string[] = ['usuario','email','nombres','apellidos','activo','acciones'];
  dataSource = this.data;

  constructor() { }

  ngOnInit(): void {
  }

  init(data: Usuarios[]): void{
    this.dataSource = data;
  }



}
