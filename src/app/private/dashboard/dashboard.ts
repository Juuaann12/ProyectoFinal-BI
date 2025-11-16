import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import Chart from 'chart.js/auto';
import { AdminSidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, AdminSidebar],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard implements AfterViewInit {

  ngAfterViewInit() {
    this.loadSalesChart();
    this.loadPieChart();
  }

  loadSalesChart() {
    new Chart('salesChart', {
      type: 'line',
      data: {
        labels: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct'],
        datasets: [
          {
            label: 'B2B',
            data: [45000,48000,52000,55000,58000,62000,68000,71000,65000,75000],
            borderColor: '#00b4ff',
            backgroundColor: 'transparent',
            borderWidth: 2,
            tension: 0.3
          },
          {
            label: 'B2C',
            data: [12500,13200,14800,15500,16200,17800,19200,20100,18500,21500],
            borderColor: '#6a5acd',
            backgroundColor: 'transparent',
            borderWidth: 2,
            tension: 0.3
          }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { position: 'bottom' } }
      }
    });
  }

  loadPieChart() {
    new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: ['B2C', 'B2B'],
        datasets: [{
          data: [22, 78],
          backgroundColor: ['#6a5acd', '#00b4ff'],
        }]
      }
    });
  }
}
