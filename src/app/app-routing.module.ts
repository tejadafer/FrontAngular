import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPacienteComponent } from './components/paciente/add-paciente.component';
import { EditPacienteComponent } from './components/paciente/edit-paciente.component';
import { PacienteComponent } from './components/paciente/paciente.component';

const routes: Routes = [
  {path: "", component: PacienteComponent},
  {path: "crear", component: AddPacienteComponent},
  {path: "editar/:id", component: EditPacienteComponent}

]; //dentro del array se coloca la ruta del componente

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
