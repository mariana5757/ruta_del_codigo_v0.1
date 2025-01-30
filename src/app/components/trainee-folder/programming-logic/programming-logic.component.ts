import { Component } from '@angular/core';

@Component({
  selector: 'app-programming-logic',
  templateUrl: './programming-logic.component.html',
  styleUrls: ['./programming-logic.component.css']
})
export class ProgrammingLogicComponent {

  topics = [
    {id:0, value: 'Sentencias condicionales if - else if - else', description: 'Las sentencias condicionales se utilizan para ejecutar diferentes bloques de código dependiendo de si una condición es verdadera o falsa.'},
    {id:1, value: 'Sentencias condicionales switch', description: 'Las sentencias condicionales switch se utilizan para ejecutar diferentes bloques de código dependiendo de el valor de una variable.'},
    {id:2, value: 'Iteradores for', description: 'Los iteradores for se utilizan para repetir un bloque de código una cantidad determinada de veces.'},
    {id:3, value: 'Iteradores while', description: 'Los iteradores while se utilizan para repetir un bloque de código mientras una condición sea verdadera.'},
    {id:4, value: 'do-while', description: 'El do-while se utiliza para repetir un bloque de código hasta que una condición sea falsa.'},
    {id:5, value: 'forEach', description: 'El forEach se utiliza para iterar sobre un array y ejecutar un bloque de código para cada elemento del array.'},
    {id:6, value: 'otros', description: 'TypeScript y JavaScript tienen variedad de iteradores que nos harán la vida mucho más sencilla.'},
    {id:7, value:'Lugares para practicar', description:'Estos son algunos sitios web donde podrás poner en práctica la logica de programación.'}
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
