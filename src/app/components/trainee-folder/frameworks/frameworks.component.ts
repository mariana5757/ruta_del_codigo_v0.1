import { Component } from '@angular/core';

@Component({
  selector: 'app-frameworks',
  templateUrl: './frameworks.component.html',
  styleUrls: ['./frameworks.component.css']
})
export class FrameworksComponent {

  topics = [
    {id: 0, value: 'Enrutamiento básico de páginas', description:'El enrutamiento en Single Page Applications (SPA) es el mecanismo que permite la navegación entre diferentes vistas dentro de una aplicación sin necesidad de recargar la página completa. En lugar de cargar una nueva página desde el servidor, el enrutador de la SPA modifica el contenido visible en la misma página, actualizando solo las partes necesarias.'},
    {id: 1, value:'Componentes funcionales', description: 'Los componentes funcionales de página en Angular son elementos reutilizables que facilitan la interacción del usuario en una aplicación'},
    {id: 2, value:'Video explicativo', description: ''}
  ]

  getTopicId(topic: { id: number; value: string }): string {
    return topic.value.replace(/\s+/g, '-').toLowerCase();
  }

  selectTopic(topic: { id: number; value: string }): void {
    const topicId = this.getTopicId(topic);
    const element = document.getElementById(topicId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
