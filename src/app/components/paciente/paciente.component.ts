import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/model/paciente';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
}) //decorador o anotation para indicar que es un componente de un template
export class PacienteComponent implements OnInit {

  paci: Paciente[]=[] //instancio una variable del tipo array para recibir los datos

  constructor(private paciServicio: PacienteService) { } //inyecto en el constructor el servicio paciente

  ngOnInit(): void { //este metodo se ejecuta  al inicio del componente
  this.listarPacientes();
  }

 listarPacientes(): void{
  this.paciServicio.listar().subscribe(data => {this.paci=data;})
 }

 borrar (id?: number){
  if (confirm("Se procedera a borrar un registro, ESTA SEGURO?"))
    { if(id != undefined)
      { this.paciServicio.borrar(id).subscribe({next:data => {
        alert("Borrado Exitosamente");
        this.listarPacientes();
        }, error: err => {alert("No se pudo borrar el registro")}
      })
      }
   }
}

}
