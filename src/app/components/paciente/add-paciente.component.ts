import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/model/paciente';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-add-paciente',
  templateUrl: './add-paciente.component.html',
  styleUrls: ['./add-paciente.component.css']
})
export class AddPacienteComponent implements OnInit {

  nombre: string= ``;
  dni: string=``;
  habitacion: number=NaN;

  constructor(private paciserv: PacienteService, private router:Router) { }

  ngOnInit(): void {
  }

  crear(): void{
    const paci = new Paciente(this.nombre, this.dni, this.habitacion);
    //validar
    this.paciserv.save(paci).subscribe({
      next: data=>{alert("Paciente agregado");
                   this.router.navigate([``]); // esto es para redirigir al url vacia
                  }, error: err=>{
                    alert("No se pudo agregar el Paciente");
                    this.router.navigate([``]);
                  }
    })
  }

}
