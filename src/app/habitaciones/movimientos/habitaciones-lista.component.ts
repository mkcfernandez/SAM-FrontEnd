// import { Component, OnInit } from '@angular/core';
// import { HabitacionLista } from './habitacion-lista';
// import { HabitacionesService } from './habitaciones.service';

// @Component({
//   selector: 'app-habitaciones-lista',
//   templateUrl: './habitaciones-lista.component.html',
//   styleUrls: ['./habitaciones-lista.component.css']
// })
// export class HabitacionesListaComponent implements OnInit {

//   notFound = false;
//   habitacionListaMov: HabitacionLista
//   constructor(private habitacionesService: HabitacionesService) { }

//   ngOnInit() {
//     this.getHabitacionesLista();
//   }

//   getHabitacionesLista(){
//     this.habitacionesService.getHabitacionesMovimientoLista().subscribe((response : HabitacionLista) => {
//       this.habitacionListaMov = response;
//     }, (err: any) => {
//       console.error(err);
//       this.notFound = true;
//     });
//   }

// }
