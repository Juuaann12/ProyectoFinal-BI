import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-tableau-gestion-ventas',
  standalone: true,
  templateUrl: './gestionventas-tableau.html',
  styleUrls: ['./gestionventas-tableau.css']
})
export class TableauGestionventas implements AfterViewInit {

  ngAfterViewInit(): void {

    const divElement: any = document.getElementById('vizContainer');
    const vizElement = divElement.getElementsByTagName('object')[0];
    

    vizElement.style.width = '100%';
    vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';

    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';


    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }
}
