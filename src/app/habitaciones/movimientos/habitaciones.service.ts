import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HabitacionLista } from './habitacion-lista';

@Injectable({
  providedIn: 'root'
})
export class HabitacionesService {

  baseURL = environment.apiURL + 'habitacion/movimiento/lista';
  constructor(private http: HttpClient) { }

  getHabitacionesMovimientoLista(): Observable<HabitacionLista>
  {
    const url = this.baseURL;
    return this.http.get<HabitacionLista>(url);
  }
}
