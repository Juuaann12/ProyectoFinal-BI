import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicData } from '../public-data';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Header, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor(public data: PublicData) {}
}

