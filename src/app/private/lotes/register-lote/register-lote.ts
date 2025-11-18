import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-lote',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register-lote.html',
  styleUrls: ['./register-lote.css']
})
export class RegisterLote {

  // Emitir evento para cerrar el modal
  @Output() close = new EventEmitter<void>();

  // Datos del formulario
  loteData = {
    origen: '',
    fechaCosecha: '',
    cantidad: '',
    calidad: 'Excelente',
    temperatura: '2-4°C',
    humedad: '85-90%',
    fechaExportacion: '',
    estado: 'Activo',
    destino: '',
    certificaciones: ''
  };

  /** BOTÓN X — Cerrar modal **/
  cerrar() {
    this.close.emit();
  }

  /** BOTÓN GUARDAR — Registrar lote **/
  registrarLote() {
    // Validar campos requeridos
    if (!this.loteData.origen || !this.loteData.fechaCosecha || !this.loteData.cantidad || !this.loteData.fechaExportacion) {
      alert('Por favor complete todos los campos requeridos (*)');
      return;
    }

    console.log('Lote registrado:', this.loteData);

    // Mostrar confirmación
    alert('Lote registrado correctamente ✔️');

    // Cerrar al guardar
    this.close.emit();
  }
}