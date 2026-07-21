import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

interface ContactForm {
  nombre: string;
  email: string;
  telefono: string;
  area: string;
  mensaje: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'estudio-perugia-app';

  menuAbierto = false;

  model: ContactForm = {
    nombre: '',
    email: '',
    telefono: '',
    area: '',
    mensaje: ''
  };

  enviado = false;

  areas = [
    'Derecho Civil y Comercial',
    'Derecho Laboral',
    'Derecho de Familia y Sucesiones',
    'Derecho Penal',
    'Derecho Societario',
    'Otra consulta'
  ];

  toggleMenu(): void {
    this.menuAbierto = !this.menuAbierto;
  }

  cerrarMenu(): void {
    this.menuAbierto = false;
  }

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    // TODO: conectar con backend / servicio de envío de correo cuando esté disponible.
    this.enviado = true;
    form.resetForm();
  }
}
