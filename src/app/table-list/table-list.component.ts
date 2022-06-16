import { Component, OnInit } from '@angular/core';
import { HabitacionLista } from '../habitaciones/movimientos/habitacion-lista';
import { HabitacionesService } from '../habitaciones/movimientos/habitaciones.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  notFound = false;
  habitacionListaMov: HabitacionLista

  constructor(private habitacionesService: HabitacionesService) { }

  ngOnInit() {
    this.getHabitacionesLista();
  }

  getHabitacionesLista(){
    this.habitacionesService.getHabitacionesMovimientoLista().subscribe((response : HabitacionLista) => {
      this.habitacionListaMov = response;
      console.log(response);
    }, (err: any) => {
      console.error(err);
      this.notFound = true;
    });
  }

}
