import { Component, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
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
    this.init(data);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['usuario','email','nombres','apellidos','estado','acciones'];
  // dataSource = null;
  public dataSource = new MatTableDataSource<Usuarios>([]);
  @ViewChild(MatPaginator) private paginator: MatPaginator;


  constructor() { }

  ngOnInit(): void {
  }

  init(data: Usuarios[]): void{
    this.dataSource.data = data;
    this.dataSource.paginator = this.paginator;
  }



}
