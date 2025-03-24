import { Component } from '@angular/core';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent {

  topics = [
    {id: 0, value:'¿Qué son GET y POST?', description:'Los métodos GET y POST son dos de los verbos HTTP más utilizados en las aplicaciones web para interactuar con el servidor. Son parte de los métodos de solicitud HTTP y se utilizan para enviar y recibir datos entre el cliente (tu navegador o aplicación) y el servidor (el backend o la API).'},
    {id: 1, value:'¿Qué es una API?', description:''},
    {id: 2, value:'Crear un Servicio para Consumir APIs', description:''},
    {id: 3, value:'Llamar a estos Métodos desde el Componente', description:''},
    {id: 4, value:'Ejemplo visual', description:''},
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
