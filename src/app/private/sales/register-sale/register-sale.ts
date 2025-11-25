import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-sale',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register-sale.html',
  styleUrls: ['./register-sale.css']
})
export class RegisterSale {

  // Emitir evento para cerrar el modal
  @Output() close = new EventEmitter<void>();
  
  // Emitir evento con los datos de la venta registrada
  @Output() saleRegistered = new EventEmitter<any>();

  // Datos del formulario
  saleData = {
    date: '',
    client: '',
    type: 'B2C',
    channel: '',
    quantity: '',
    amount: ''
  };

  /** BOTÓN X — Cerrar modal **/
  cerrar() {
    this.close.emit();
  }

  /** BOTÓN GUARDAR — Registrar venta **/
  registrarVenta() {
    // Validar que todos los campos requeridos estén llenos
    if (!this.saleData.date || !this.saleData.client || !this.saleData.channel || !this.saleData.quantity || !this.saleData.amount) {
      alert('Por favor complete todos los campos requeridos');
      return;
    }

    console.log('Venta registrada:', this.saleData);

    // Formatear la fecha para mostrarla como en la tabla (ej: "30 sept")
    const fechaFormateada = this.formatearFecha(this.saleData.date);
    
    // Formatear el monto con separadores de miles
    const montoFormateado = '$' + parseInt(this.saleData.amount).toLocaleString();
    
    // Formatear la cantidad con "kg"
    const cantidadFormateada = this.saleData.quantity + ' kg';

    // Crear el objeto de venta con el formato correcto
    const nuevaVenta = {
      fecha: fechaFormateada,
      cliente: this.saleData.client,
      canal: this.saleData.channel,
      tipo: this.saleData.type,
      cantidad: cantidadFormateada,
      monto: montoFormateado
    };

    // Emitir la nueva venta al componente padre
    this.saleRegistered.emit(nuevaVenta);

    // Mostrar confirmación
    alert('Venta registrada correctamente ✔️');

    // Cerrar el modal
    this.close.emit();

    // Limpiar el formulario
    this.limpiarFormulario();
  }

  /** Formatear fecha de YYYY-MM-DD a "dd mmm" **/
  private formatearFecha(fecha: string): string {
    const date = new Date(fecha);
    const dia = date.getDate();
    const mes = date.toLocaleString('es-ES', { month: 'short' });
    return `${dia} ${mes}`;
  }

  /** Limpiar el formulario después de guardar **/
  private limpiarFormulario() {
    this.saleData = {
      date: '',
      client: '',
      type: 'B2C',
      channel: '',
      quantity: '',
      amount: ''
    };
  }
}