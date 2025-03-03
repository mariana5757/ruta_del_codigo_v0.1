import { Component } from '@angular/core';

@Component({
  selector: 'app-software-principles',
  templateUrl: './software-principles.component.html',
  styleUrls: ['./software-principles.component.css'],
})
export class SoftwarePrinciplesComponent {
  topics = [
    {
      id: 0,
      value: 'Uso Consciente del Tipado de Variables en Angular',
      description:
        'En TypeScript, el tipado de variables es una de sus mayores ventajas, ya que nos permite escribir código más seguro, legible y mantenible. En Angular, utilizar tipos correctamente mejora la detección de errores, la autocompletación en los editores y facilita la escalabilidad del código.',
    },
    {
      id: 1,
      value:
        'Principio de Responsabilidad Única (SRP - Single Responsibility Principle)',
      description:
        'El Principio de Responsabilidad Única (SRP) establece que una clase, módulo o componente debe tener una única razón para cambiar. Es decir, cada entidad de software debe tener una sola responsabilidad bien definida y no mezclar diferentes funcionalidades.',
    },
    {
      id: 2,
      value: 'Principio de Abierto/Cerrado (OCP - Open/Closed Principle)',
      description:
        'Un módulo, clase o función debe estar abierto para su extensión, pero cerrado para su modificación. Esto significa que podemos agregar nuevas funcionalidades sin modificar el código existente. En Angular, esto se traduce en escribir código modular y extensible, evitando tocar archivos antiguos cada vez que agregamos una nueva funcionalidad.',
    },
    {
      id: 3,
      value:
        'Principio de Sustitución de Liskov (LSP - Liskov Substitution Principle)',
      description:
        'Las clases hijas deben poder ser usadas en lugar de sus clases padres sin afectar el funcionamiento del sistema.',
    },
    {
      id: 4,
      value:
        'Principio de Segregación de Interfaces (ISP - Interface Segregation Principle)',
      description:
        'Es mejor tener varias interfaces pequeñas y específicas en lugar de una interfaz grande y genérica.',
    },
  ];

  typesVariables = [
    {type: 'string', description: 'Cadena de texto "Pragma"'},
    {type: 'number', description: 'Número entero 4'},
    {type: 'boolean', description: 'Verdadero o Falso'},
    {type: 'any', description: 'Cualquier tipo de dato'},
    {type: 'undefined', description: 'No se ha definido un valor'},
    {type: 'null', description: 'No tiene ningun valor'},
    {type: 'Array<T>', description: 'Arreglo de elementos de tipo T'},
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
