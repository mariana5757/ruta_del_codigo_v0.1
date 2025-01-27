import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-trainee-page',
  templateUrl: './trainee-page.component.html',
  styleUrls: ['./trainee-page.component.css']
})
export class TraineePageComponent {
  isUp = 2;
  cardActive = {};
    cards = [
    { id:1, title: 'Codificación', icon: 'code' },
    { id:2, title: 'Versionamiento', icon: 'version-control' },
    { id:3, title: 'Estilos gráficos UI', icon: 'graphics' },
    { id:4, title: 'Frameworks, librerias y otros', icon: 'framework' },
    { id:5, title: 'Lógica de programación', icon: 'logic' },
    { id:6, title: 'Comunicación y persistencia', icon: 'communication' },
    { id:7, title: 'Principios de software', icon: 'principles' }
  ];
  
  //cambiar a 1 cuando termine todo
  idContent = 2;
  
  selectCard(card: any) {
    this.idContent = card.id;
    this.cardActive = card;
  }

  selectUp() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
  }
}
