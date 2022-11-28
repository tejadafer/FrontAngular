import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Paciente } from 'src/app/model/paciente';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-edit-paciente',
  templateUrl: './edit-paciente.component.html',
  styleUrls: ['./edit-paciente.component.css']
})
export class EditPacienteComponent implements OnInit {

  paci: Paciente= null;
  //id = this.activarRouter.snapshot.params[`id`];

  constructor(private paciservice: PacienteService, private router:Router, private activarRouter:ActivatedRoute ) { }

  ngOnInit(): void {
    const id = this.activarRouter.snapshot.params[`id`];
    if (confirm("Se procedera a editar un registro, ESTA SEGURO?"))
    {if (id != undefined)
    this.paciservice.detalle(id).subscribe({
      next: data =>{this.paci= data;
                  }, error: err=> {alert ("error al editar le registro");
                                  this.router.navigate([``]);
                                  }

    })
  }else this.router.navigate([``]);
  }
  editar(): void {
    const id = this.activarRouter.snapshot.params[`id`];
    this.paciservice.update(id,this.paci).subscribe({
      next: data=>{
       // alert("Libro modificado correctamente");
        this.router.navigate([``]);
      }, error: err=>{
        alert("Error a modificar el libro");
        this.router.navigate([``]);
      }
    })
  }

}
