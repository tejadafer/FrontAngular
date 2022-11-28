export class Paciente {
  id?: number;
  nombre: string;
  dni: string;
  habitacion: number;

  constructor(nombre: string, dni: string, habitacion: number) {
    this.nombre = nombre;
    this.dni = dni;
    this.habitacion = habitacion;
  }
}
