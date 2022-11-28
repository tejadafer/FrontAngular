import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../model/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  url= "http://localhost:8080/apk"

  constructor(private clientehttp: HttpClient) { }

//aca definimos los CRUD
//crear
public save(paci: Paciente):Observable<any>{
  return this.clientehttp.post<any>(this.url + '/crear', paci);
}
//read
public listar():Observable<Paciente[]>{
  return this.clientehttp.get<Paciente[]>(this.url + '/vertodos');
}

public detalle(id: number):Observable<Paciente>{
  return this.clientehttp.get<Paciente>(this.url + `/ver/${id}`);
}

public borrar(id: number):Observable<any>{
  return this.clientehttp.delete<any>(this.url + `/borrar/${id}`);
}

public update(id: number, paci: Paciente):Observable<any>{
  return this.clientehttp.put<any>(this.url + `/editar/${id}`, paci);
}



}
