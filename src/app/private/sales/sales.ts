import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminSidebar } from '../sidebar/sidebar';
import { Navbar } from "../navbar/navbar";
import { AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { RegisterSale } from './register-sale/register-sale';



@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, AdminSidebar, Navbar, RegisterSale],
  templateUrl: './sales.html',
  styleUrls: ['./sales.css'],
})

export class Sales implements AfterViewInit {

  searchClient = '';

  ventasMensuales = [
    { mes: 'Jun', b2c: 20000, b2b: 78000 },
    { mes: 'Jul', b2c: 21000, b2b: 72000 },
    { mes: 'Ago', b2c: 22000, b2b: 86000 },
    { mes: 'Sep', b2c: 19000, b2b: 75000 },
    { mes: 'Oct', b2c: 21000, b2b: 88000 }
  ];

  registroVentas = [
    { fecha: '30 sept', cliente: 'Restaurante El Jardín', canal: 'B2B - Restaurant', tipo:'B2B', cantidad:'65 kg', monto:'$3200' },
    { fecha: '02 oct', cliente: 'Distribuidora Norte', canal: 'B2B - Distribuidor', tipo:'B2B', cantidad:'160 kg', monto:'$12,800' },
    { fecha: '04 oct', cliente: 'María González', canal: 'B2C - Online', tipo:'B2C', cantidad:'12 kg', monto:'$850' },
    { fecha: '07 oct', cliente: 'Supermercado Fresh', canal: 'B2B - Minorista', tipo:'B2B', cantidad:'110 kg', monto:'$8500' },
    { fecha: '09 oct', cliente: 'Carlos Méndez', canal: 'B2C - Tienda', tipo:'B2C', cantidad:'15 kg', monto:'$1200' },
    { fecha: '11 oct', cliente: 'Industrias Alimentos SA', canal: 'B2B - Industria', tipo:'B2B', cantidad:'250 kg', monto:'$18,500' },
    { fecha: '14 oct', cliente: 'Hotel Costa Azul', canal: 'B2B - Hotel', tipo:'B2B', cantidad:'82 kg', monto:'$4200' },
    { fecha: '17 oct', cliente: 'Ana Rodríguez', canal: 'B2C - Online', tipo:'B2C', cantidad:'8 kg', monto:'$600' },
    { fecha: '19 oct', cliente: 'Café Premium', canal: 'B2B - Restaurant', tipo:'B2B', cantidad:'40 kg', monto:'$3200' }
  ];

//lista filtrada
  filteredVentas = [...this.registroVentas];

  showRegisterSale = false;

  openRegisterSale() {
  this.showRegisterSale = true;
  }

  closeRegisterSale() {
  this.showRegisterSale = false;
  }
// Método de filtrado
  ngOnChanges() {
    this.applyFilter();
  }

  applyFilter() {
    const term = this.searchClient.toLowerCase();

    this.filteredVentas = this.registroVentas.filter(v =>
      v.cliente.toLowerCase().includes(term)
    );
  }
  ngAfterViewInit() {
  const ctx = document.getElementById('ventasChart') as HTMLCanvasElement;

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: this.ventasMensuales.map(v => v.mes),
      datasets: [
        {
          label: 'B2B',
          data: this.ventasMensuales.map(v => v.b2b),
          backgroundColor: '#6366f1'
        },
        {
          label: 'B2C',
          data: this.ventasMensuales.map(v => v.b2c),
          backgroundColor: '#93c5fd'
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

}
