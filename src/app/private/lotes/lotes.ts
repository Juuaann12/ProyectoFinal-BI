import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminSidebar } from '../sidebar/sidebar';
import { Router } from 'express';

interface Lote {
  codigo: string;
  origen: string;
  fecha: string;
  cantidad: string;
  calidad: 'Excelente' | 'Buena' | 'Regular';
  estado: 'Activo' | 'En tránsito' | 'Exportado';
}

@Component({
  selector: 'app-lotes',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, AdminSidebar],
  templateUrl: './lotes.html',
  styleUrls: ['./lotes.css']
})
export class Lotes {
  searchText = '';

  lotes: Lote[] = [
    { codigo: 'LOTE-2025-001', origen: 'Campo Norte - Sector A', fecha: '27/10/2025', cantidad: '850 kg', calidad: 'Excelente', estado: 'Activo' },
    { codigo: 'LOTE-2025-002', origen: 'Campo Sur - Sector B', fecha: '24/10/2025', cantidad: '1200 kg', calidad: 'Excelente', estado: 'Exportado' },
    { codigo: 'LOTE-2025-003', origen: 'Campo Este - Sector C', fecha: '21/10/2025', cantidad: '650 kg', calidad: 'Buena', estado: 'Activo' },
    { codigo: 'LOTE-2025-004', origen: 'Campo Norte - Sector D', fecha: '19/10/2025', cantidad: '920 kg', calidad: 'Excelente', estado: 'Activo' },
    { codigo: 'LOTE-2025-005', origen: 'Campo Oeste - Sector A', fecha: '17/10/2025', cantidad: '780 kg', calidad: 'Buena', estado: 'En tránsito' },
    { codigo: 'LOTE-2025-006', origen: 'Campo Sur - Sector B', fecha: '12/10/2025', cantidad: '1100 kg', calidad: 'Excelente', estado: 'Exportado' },
    { codigo: 'LOTE-2025-007', origen: 'Campo Este - Sector F', fecha: '11/10/2025', cantidad: '450 kg', calidad: 'Regular', estado: 'Exportado' }
  ];

  get filteredLotes() {
    const t = this.searchText.toLowerCase();
    return this.lotes.filter(l =>
      l.codigo.toLowerCase().includes(t) ||
      l.origen.toLowerCase().includes(t)
    );
  }
}
