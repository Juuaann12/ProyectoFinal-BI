import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, Header, Footer],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {

  exportMarkets = [
    'Dubái - EAU',
    'Abu Dhabi - EAU',
    'Sharjah - EAU'
  ];
}

