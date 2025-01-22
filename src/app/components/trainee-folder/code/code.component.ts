import { Component } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent {

  topics = [
    {id:0, 
      value:'Conceptos básicos de HTML', 
      description: 'HTML (HyperText Markup Language) es el lenguaje estándar utilizado para crear y estructurar el contenido de las páginas web. Su función principal es definir la estructura básica de un sitio web mediante el uso de etiquetas o tags, que organizan el contenido en distintos elementos. Estas etiquetas permiten identificar y dar significado a diferentes partes del contenido, como títulos, párrafos, imágenes, tablas, enlaces, formularios y mucho más. HTML actúa como el esqueleto de una página web, proporcionando la base sobre la que se aplican estilos (CSS) y funcionalidades (JavaScript).', 
      image: 'assets/images/trainee/ejemplo_html.JPG'}, 
    {id:1, 
      value:'Conceptos básicos de CSS', 
      description: 'CSS (Cascading Style Sheets) es un lenguaje que se usa para dar estilo y formato a las páginas web. Mientras que HTML estructura el contenido, CSS define cómo se verá ese contenido: colores, tamaños, fuentes, márgenes, bordes, disposición de los elementos, entre otros.', 
      image: 'assets/images/trainee/ejemplo_css.JPG'}, 
    {id:2, 
      value:'Conceptos básicos de TypeScript', 
      description: 'TypeScript es un lenguaje de programación de tipado estatico basado en JavaScript. Es un lenguaje que se utiliza principalmente para desarrollar aplicaciones web y móviles.', 
      image: 'assets/images/trainee/ejemplo_ts.JPG'}, 
    {id:3, 
      value:'Conceptos básicos de Angular', 
      description: 'Angular es un framework de desarrollo web de código abierto basado en TypeScript, utilizado para construir aplicaciones web dinámicas y de una sola página. Facilita la creación de interfaces de usuario a través de componentes, gestiona la navegación con su sistema de enrutamiento, permite la manipulación del DOM mediante directivas y ofrece inyección de dependencias para una arquitectura más modular. Además, Angular utiliza el binding de datos para sincronizar la lógica de la aplicación con la interfaz de usuario.'},
    {id:4, 
      value:'Estructura de un proyecto en Angular', 
      description: 'Es la organización y disposición de los archivos y carpetas dentro de un proyecto de software. En el contexto de Angular, tener una estructura bien organizada es crucial para que el desarrollo sea escalable, mantenible y comprensible', 
      image: 'assets/images/trainee/estructura_angular.jpg'},
    {id:5, 
      value:'Directivas estructurales y atributivas', 
      description: 'Las directivas en Angular son una característica fundamental que permite manipular el DOM (Document Object Model) de forma declarativa.'},
    {id:6, 
      value:'Debugging en Angular', 
      description: 'Debugging en Angular se refiere al proceso de identificar y corregir errores en tu aplicación. Angular, como framework, ofrece varias herramientas y enfoques que facilitan la depuración durante el desarrollo. Podemos debuggear utilizando console.log(), ver los mensajes de error en la consola del navegador, utilizar herramientas como la herramienta de depuración de Angular, entre otras.'},
    {id:7, 
      value:'Retos en angular (Material audiovisual)', 
      description: 'En esta sección encontraremos ejercicios y desafios para practicar y mejorar tus conocimientos sobre Angular, utilizando todos los conceptos anteriores.'},
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
