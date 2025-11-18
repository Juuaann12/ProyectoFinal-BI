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
    console.log('Venta registrada:', this.saleData);

    // aquí más adelante enviaremos los datos al componente padre
    alert('Venta registrada correctamente ✔️');

    // cerrar al guardar
    this.close.emit();
  }
}
