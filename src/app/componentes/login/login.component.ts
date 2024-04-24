import { Component } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { windowTime } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  protected mail!: string;
  protected clave!: string;
  protected isLogin = "";
  protected isRegistrado = "";

  mostrarClave(evento: Event) {
    let input = evento.target as HTMLInputElement;
    const input_clave = document.getElementById("txt_password") as HTMLInputElement;

    if (input.checked == true) {
      input_clave.type = "text";
    } else {
      input_clave.type = "password";

    }
  }
  registrar() {
    this.isLogin = "";
    let json_usuarios = window.localStorage.getItem("usuarios") ?? JSON.stringify([]);
    const usuarios: Usuario[] = JSON.parse(json_usuarios);
    let usuario: Usuario = {
      clave: this.clave?.trim(),
      mail: this.mail?.trim()
    }
    usuarios.push(usuario);
    this.isRegistrado = "Registraccion exitosa";
    window.localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }
  login(): boolean {
    // si es null o undefined??
    this.isRegistrado = "";
    let json_usuarios = window.localStorage.getItem("usuarios") ?? JSON.stringify([]);
    const usuarios: Usuario[] = JSON.parse(json_usuarios);

    let existe = false;
    for (let index = 0; index < usuarios.length; index++) {
      const element = usuarios[index];

      if (element.clave == this.clave?.trim() && element.mail == this.mail?.trim()) {

        existe=true;
        break;
      }


    }
    this.isLogin=(existe == false )? "usuario no registrado" : "usuario logeado";
    return existe;
  }


}
