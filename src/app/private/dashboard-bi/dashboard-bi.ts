import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'dashboard-bi',
  standalone: true,
  templateUrl: './dashboard-bi.html',
  styleUrls: ['./dashboard-bi.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardBIComponent {

  private platformId = inject(PLATFORM_ID);

  embedConfig: any = null;

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      // 👉 SOLO se ejecuta en el navegador (no en SSR)
      this.embedConfig = {
        type: 'report',
        id: 'TU_ID',
        embedUrl: 'TU_URL',
        accessToken: 'TU_TOKEN',
        tokenType: 1,
        settings: {
          panes: {
            filters: { expanded: false, visible: false },
            pageNavigation: { visible: false }
          }
        }
      };
    }
  }

}
