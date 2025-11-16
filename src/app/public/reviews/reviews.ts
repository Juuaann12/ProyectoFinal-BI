import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../header/header';
import { Footer} from '../footer/footer';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, Header, Footer],
  templateUrl: './reviews.html',
  styleUrls: ['./reviews.css']
})
export class Reviews {

  reviews = [
    {
      name: 'Ahmed Al-Mansouri (Dubái)',
      country: 'EAU',
      rating: 5,
      date: 'Reseña verificada 2025',
      text: 'Excelente producto certificado Halal. Los arándanos LULU BARI son perfectos para nuestros clientes en Dubái. La calidad es superior.',
      badges: ['Halal', 'ISO 22000']
    },
    {
      name: 'Fatima Hassan',
      country: 'Verificada',
      rating: 5,
      date: 'Reseña verificada 2025',
      text: 'Producto Premium. Me encanta que sean certificados Halal y completamente naturales. Perfectos para snacks saludables.',
      badges: ['Orgánico', 'Halal']
    },
    {
      name: 'Gourmet Foods Dubái LLC',
      country: 'EAU',
      rating: 4,
      date: 'Reseña verificada 2025',
      text: 'Llevamos meses distribuyendo LULU BARI en Dubái y nuestros clientes están encantados. La certificación Halal y la calidad premium hacen la diferencia.',
      badges: ['Halal', 'HACCP']
    }
  ];
}
