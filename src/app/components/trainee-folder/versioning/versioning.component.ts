import { Component } from '@angular/core';

@Component({
  selector: 'app-versioning',
  templateUrl: './versioning.component.html',
  styleUrls: ['./versioning.component.css']
})
export class VersioningComponent {

  topics = [
    { id: 1, value: '¿Que es GIT y para que sirve?', description: 'Git es un sistema de control de versiones distribuido que permite gestionar y rastrear cambios en el código de un proyecto. este tiene como proposito facilitar la colaboración entre desarrolladores, mantener un historial de cambios y revertir errores en el código'},
    { id: 2, value: 'Configuración inicial de GIT', description:''},
    { id: 3, value: 'Comandos básicos', description: '' },
    { id: 4, value: 'Resolución de conflictos', description: '' },
    { id: 5, value: 'GitFlow', description: '' },
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
