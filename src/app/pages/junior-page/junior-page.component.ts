import { Component } from '@angular/core';

@Component({
  selector: 'app-junior-page',
  templateUrl: './junior-page.component.html',
  styleUrls: ['./junior-page.component.css'],
})
export class JuniorPageComponent {
  isUp = 2;
  cardActive = {};
  cards = [
    { id: 1, title: 'Codificación' },
    { id: 2, title: 'Versionamiento' },
    { id: 3, title: 'Estilos gráficos UI' },
    { id: 4, title: 'Frameworks, librerias y otros' },
    { id: 5, title: 'Lógica de programación' },
    { id: 6, title: 'Comunicación y persistencia' },
    { id: 7, title: 'Principios de software' },
    { id: 8, title: 'SEO on page' },
    { id: 9, title: 'Arquitectura' },
  ];

  idContent = 1;
  
  selectCard(card: any) {
    this.idContent = card.id;
    this.cardActive = card;
    localStorage.setItem('idContent', this.idContent.toString());
  }

  selectUp() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
  }

  ngOnInit(){
    this.idContent = localStorage.getItem('idContent') ? parseInt(localStorage.getItem('idContent')!, 10) : 1;
  }
}
