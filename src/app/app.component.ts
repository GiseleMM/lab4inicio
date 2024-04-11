import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'clase_1';
  protected buffer = '';
  protected onBTN() {
    this.title = this.buffer;
  }
  protected edadUno = 0;
  protected edadDos = 0;
  protected promedio = 0;
  protected onCalcular() {
    console.log(this.edadUno);
    console.log(this.edadDos);
    this.promedio = (this.edadUno + this.edadDos) / 2.0;

  }
  protected onLimpiar() {
    this.edadUno = 0;
    this.edadDos = 0;
    this.promedio = 0;
  }
  ngOnInit() {
    // alert("inicio");
  }
}
