import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appRoutes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

bootstrapApplication(App, {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(),
    importProvidersFrom(FormsModule)
  ]
});
