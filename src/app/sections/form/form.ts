import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.scss'
})
export class Form {
    formData = {
    tipoDocumento: '',
    numeroDocumento: '',
    nombre: '',
    correo: '',
    celular: '',
    aceptaTerminos: false
  };

  tiposDocumento = ['Cédula de ciudadanía', 'Tarjeta de identidad', 'Pasaporte'];

  onSubmit() {
    if (!this.formData.aceptaTerminos) {
      alert('Debes aceptar los Términos y Condiciones');
      return;
    }
    console.log('Formulario enviado:', this.formData);
    alert('Formulario enviado con éxito 🚀');
  }
}
