import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TareasService } from './services/tareas.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  listaTareas:string[] = [];
  nuevaTarea= '';

  private _tareasService = inject(TareasService);

  ngOnInit(): void {
      this.listaTareas = this._tareasService.getTareas();
  }
  
  agregarTarea(){
    this._tareasService.agragarTarea(this.nuevaTarea);
    this.nuevaTarea = '';
    this.listaTareas = this._tareasService.getTareas();
  }

  eliminarTarea(index: number){
    this._tareasService.eliminarTarea(index);
    this.listaTareas = this._tareasService.getTareas();
  }

}
