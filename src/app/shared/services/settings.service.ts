import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private html = document.querySelector('#theme');
  constructor() {
    const url =  localStorage.getItem('tema') || `./assets/css/colors/red.css`;
    this.html?.setAttribute('href', url)
    
   }

   changeTheme(tema: string){
    const url = `./assets/css/colors/${tema}.css`;

    this.html?.setAttribute('href', url);
    localStorage.setItem('tema', url);
    this.checarTema();

  }

  checarTema(){
    //selecciona todos los elementos del template con la clase 'slector'
    const linksClases = document.querySelectorAll('.selector');

    linksClases.forEach(element =>{
      element.classList.remove('working');
      const btn = element.getAttribute('data-theme');
  
      const btnUrl = `./assets/css/colors/${btn}.css`;
    
      const tema = this.html?.getAttribute('href');
      if (btnUrl === tema) {
        element.classList.add('working');
      }

    })
  }
}
