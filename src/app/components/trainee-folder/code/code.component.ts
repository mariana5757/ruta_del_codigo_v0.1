import { Component } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent {

  topics = [
    {id:0, value:'Conceptos básicos de HTML', description: 'HTML (HyperText Markup Language) es el lenguaje estándar para crear y estructurar el contenido de las páginas web. Define la estructura básica de un sitio utilizando "etiquetas" (tags) que organizan el contenido en elementos como títulos, párrafos, imágenes, tablas, enlaces, entre otros.'}, 
    {id:1, value:'Conceptos básicos de CSS', description: 'CSS (Cascading Style Sheets) es un lenguaje que se usa para dar estilo y formato a las páginas web. Mientras que HTML estructura el contenido, CSS define cómo se verá ese contenido: colores, tamaños, fuentes, márgenes, bordes, disposición de los elementos, entre otros.'}, 
    {id:2, value:'Conceptos básicos de TypeScript', description: 'TypeScript es un lenguaje de programación de tipado estatico basado en JavaScript. Es un lenguaje que se utiliza principalmente para desarrollar aplicaciones web y móviles.'}, 
    {id:3, value:'Conceptos básicos de Angular', description: 'Angular es un framework de desarrollo de aplicaciones web en TypeScript. Es un framework de desarrollo de aplicaciones web basado en TypeScript.'},
    {id:4, value:'Estructura de un proyecto en Angular', description: 'Es la organización y disposición de los archivos y carpetas dentro de un proyecto de software. En el contexto de Angular, tener una estructura bien organizada es crucial para que el desarrollo sea escalable, mantenible y comprensible'},
    {id:5, value:'Angular CLI', description: 'Angular CLI (Command Line Interface) es una herramienta de línea de comandos que facilita la creación, el desarrollo y la administración de aplicaciones Angular. Con Angular CLI, puedes generar componentes, servicios, módulos, y realizar muchas otras tareas relacionadas con el desarrollo de Angular, todo desde la línea de comandos.'},
    {id:6, value:'Directivas estructurales y atributivas', description: 'Las directivas en Angular son una característica fundamental que permite manipular el DOM (Document Object Model) de forma declarativa.'},
    {id:7, value:'Debugging en Angular', description: 'Debugging en Angular se refiere al proceso de identificar y corregir errores en tu aplicación. Angular, como framework, ofrece varias herramientas y enfoques que facilitan la depuración durante el desarrollo.'},
    {id:8, value:'Retos en angular', description: 'En la sección Retos en Angular, encontraremos ejercicios y desafiços para practicar y mejorar tus conocimientos sobre Angular.'},
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
