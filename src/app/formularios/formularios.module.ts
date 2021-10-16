import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultarComponent } from './consultar/consultar.component';
import { FormularioComponent } from './formulario/formulario.component';
import { UiModule } from '../ui/ui.module';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { TablaComponent } from './tabla/tabla.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ModalNuevoUsuarioComponent } from './modal-nuevo-usuario/modal-nuevo-usuario.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import { ModalVerUsuarioComponent } from './modal-ver-usuario/modal-ver-usuario.component';

@NgModule({
  declarations: [
    ConsultarComponent,
    FormularioComponent,
    TablaComponent,
    ModalNuevoUsuarioComponent,
    ModalVerUsuarioComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule
  ],
  exports:[
  ]
})
export class FormulariosModule { }
