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

  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();   // ← NUEVO

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

  cerrar() {
    this.close.emit();
  }

  registrarLote() {
    if (!this.loteData.origen || !this.loteData.fechaCosecha || !this.loteData.cantidad || !this.loteData.fechaExportacion) {
      alert('Por favor complete todos los campos requeridos (*)');
      return;
    }

    // Convertir al formato de la tabla principal
    const nuevoLote = {
      codigo: 'LOTE-' + Date.now(),
      origen: this.loteData.origen,
      fecha: this.loteData.fechaCosecha,
      cantidad: this.loteData.cantidad + ' kg',
      calidad: this.loteData.calidad as any,
      estado: this.loteData.estado as any
    };

    // ← Enviar lote al padre
    this.save.emit(nuevoLote);

    alert('Lote registrado correctamente ✔️');

    this.close.emit();
  }
}
