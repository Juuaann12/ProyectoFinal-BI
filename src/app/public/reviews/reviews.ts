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
      name: 'Ahmed Al Maktoum',
      location: 'Dubai, UAE',
      date: '27 de octubre de 2025',
      rating: 5,
      type: 'B2B',          // para filtrar
      category: 'Hoteles',  // etiqueta azul
      verified: true,       
      text: 'Excellent quality blueberries! Perfect for our luxury hotel breakfast buffet. The Halal certification is essential for our business.',
    },
    {
      name: 'Sarah Johnson',
      location: 'Abu Dhabi, UAE',
      date: '24 de octubre de 2025',
      rating: 5,
      type: 'B2C',
      category: 'Retail',
      verified: true,
      text: 'The best dried blueberries Ive found in UAE. Natural taste, no added sugar, and great for healthy snacking.',
    },
    {
      name: 'Distribuidora Al Noor',
      location: 'Dubai, UAE',
      date: '19 de octubre de 2025',
      rating: 5,
      type: 'B2B',
      category: 'Distribuidor',
      verified: true,
      text: 'Proveedor confiable, certificaciones impecables y producto de calidad consistente. Perfectos para el mercado premium de EAU.',
    },
    {
      name: 'Restaurant Le Jardin',
      location: 'Dubai, UAE',
      date: '14 de octubre de 2025',
      rating: 4,
      type: 'B2B',
      category: 'Restaurante',
      verified: true,
      text: 'We use these blueberries in our desserts and salads. Customers love them. Great partnership with LULU BARI.',
    },
    {
      name: 'María González',
      location: 'Sharjah, UAE',
      date: '9 de octubre de 2025',
      rating: 4,
      type: 'B2C',
      category: 'E-commerce',
      verified: true,
      text: 'Me encantan estos arándanos. Los compro regularmente para mis hijos. Son naturales, deliciosos y muy saludables.',
    },
    {
      name: 'Jumeirah Supermarket',
      location: 'Dubai, UAE',
      date: '4 de octubre de 2025',
      rating: 5,
      type: 'B2B',
      category: 'Supermercado',
      verified: true,
      text: 'Our customers specifically ask for LULU BARI blueberries. The quality and packaging are excellent for premium retail.',
    },
    {
      name: 'Fatima Al-Rashid',
      location: 'Dubai, UAE',
      date: '27 de septiembre de 2025',
      rating: 4,
      type: 'B2C',
      category: 'Retail',
      verified: true,
      text: 'Very good product. I appreciate the natural processing without preservatives. Perfect for my family.',
    }
    ,
    {
      name: 'Palm Catering Services',
      location: 'Abu Dhabi, UAE',
      date: '19 de septiembre de 2025',
      rating: 5,
      type: 'B2B',
      category: 'Catering',
      verified: true,
      text: 'Consistent quality for our catering events. The certifications make it easy to include in our Halal menu offerings.',
    }
  ];

  filteredReviews = [...this.reviews]; // Para mostrar filtrados

  filterByType(type: string) {
    this.filteredReviews =
      type === 'all'
        ? this.reviews
        : this.reviews.filter(r => r.type === type);
  }
}
