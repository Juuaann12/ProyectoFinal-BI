import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSidebar } from '../sidebar/sidebar';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Navbar } from "../navbar/navbar";
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-calidad',
  standalone: true,
  imports: [CommonModule, RouterModule, AdminSidebar, FormsModule, Navbar, BaseChartDirective],
  templateUrl: './calidad.html',
  styleUrls: ['./calidad.css']
})
export class Calidad {

  // --- Datos de tarjetas superiores ---
  promedioCalificacion = 4.7;
  totalResenas = 313;
  satisfaccion = 89.5;
  problemasResueltos = 2;

    // --- Datos para gráficas ---
  
  // Gráfica de Tendencia de Calificaciones
  public tendenciaCalificacionesData = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct'],
    datasets: [
      {
        label: 'Calificación Promedio',
        data: [4.5, 4.6, 4.4, 4.7, 4.6, 4.8, 4.5, 4.7, 4.6, 4.7],
        borderColor: '#4CAF50',
        backgroundColor: 'rgba(76, 175, 80, 0.1)',
        tension: 0.4,
        fill: true
      }
    ]
  };

  public tendenciaCalificacionesOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
        min: 4.0,
        max: 5.0,
        ticks: {
          stepSize: 0.2
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  // Gráfica de Volumen de Reseñas
  public volumenResenasData = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct'],
    datasets: [
      {
        label: 'Reseñas por Mes',
        data: [25, 28, 32, 30, 35, 40, 38, 42, 45, 50],
        backgroundColor: '#2196F3',
        borderColor: '#1976D2',
        borderWidth: 1
      }
    ]
  };

  public volumenResenasOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  // --- Reseñas recientes ---
  resenas = [
    { usuario: "Marina González", lote: "LOTE-2025-001", fecha: "27 oct 2025", estrella: 5, comentario: "Excelente calidad. Los arándanos llegaron frescos." },
    { usuario: "Carlos Méndez", lote: "LOTE-2025-003", fecha: "25 oct 2025", estrella: 4, comentario: "Calidad consistente como siempre." },
    { usuario: "Ana Rodríguez", lote: "LOTE-2025-004", fecha: "21 oct 2025", estrella: 4, comentario: "Muy buenos arándanos, el empaque podría mejorar." },
    { usuario: "Roberto Silva", lote: "LOTE-2025-005", fecha: "19 oct 2025", estrella: 5, comentario: "Los mejores arándanos que he probado." },
    { usuario: "Laura Martínez", lote: "LOTE-2025-006", fecha: "17 oct 2025", estrella: 3, comentario: "Algunos arándanos venían un poco blandos." }
  ];

  // --- Problemas de calidad por lote ---
  problemas = [
    { lote: 'LOTE-2025-003', problema: 'Calidad Regular - Textura inconsistente', severidad: 'Media', fecha: '17/10/2025', estado: 'Pendiente', accion: 'Ajustar tiempo de refrigeración' },
    { lote: 'LOTE-2025-004', problema: 'Empaque con sellado débil', severidad: 'Alta', fecha: '10/10/2025', estado: 'Resuelto', accion: 'Mejorar sellado térmico' },
    { lote: 'LOTE-2025-006', problema: 'Variación en dulzor entre lotes', severidad: 'Baja', fecha: '04/10/2025', estado: 'En proceso', accion: 'Revisión de proceso de empacado' }
  ];
}
