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
    this.sendWhatsAppMessage();
    this.enviado = true;
    form.resetForm();
  }

  sendWhatsAppMessage(): void {
    const baseUrl = 'https://wa.me/';
    const finalMessage = `Hola, soy ${this.model.nombre}. Mi correo es ${this.model.email} y mi teléfono es ${this.model.telefono}. Área de consulta: ${this.model.area}. Mensaje: ${this.model.mensaje}`;
    const encodedMessage = encodeURIComponent(finalMessage);

    const finalUrl = `${baseUrl}+5491136570287?text=${encodedMessage}`;
    
    // Opens WhatsApp Web/App in a new browser tab
    window.open(finalUrl, '_blank');
  }
}
