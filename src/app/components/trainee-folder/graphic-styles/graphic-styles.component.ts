import { Component } from '@angular/core';

@Component({
  selector: 'app-graphic-styles',
  templateUrl: './graphic-styles.component.html',
  styleUrls: ['./graphic-styles.component.css']
})
export class GraphicStylesComponent {

  topics = [
    {id: 0, value:'Sistemas de Rejilla en UI', description:'Un sistema de rejilla ayuda a organizar los elementos de una interfaz de manera estructurada y flexible.'},
    {id: 1, value:'Propiedades CSS para Diseño Responsive', description:'Las propiedades CSS para diseño responsive permiten que una página web se adapte a diferentes tamaños de pantalla y dispositivos.'}
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
