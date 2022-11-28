import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { AddPacienteComponent } from './components/paciente/add-paciente.component';
import { FormsModule } from '@angular/forms';
import { EditPacienteComponent } from './components/paciente/edit-paciente.component';

@NgModule({
  declarations: [
    AppComponent,
    PacienteComponent,
    AddPacienteComponent,
    EditPacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
