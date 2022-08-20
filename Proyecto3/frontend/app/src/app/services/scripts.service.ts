import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptsService {

  constructor() {

   }

   load(scripts : string[]){
    for (const script of scripts) {
      let script_element = document.createElement('script');
      script_element.src = "./assets/js/" + script;
      let body = document.getElementsByTagName('body')[0];
      body.appendChild(script_element);
    }
   }
}
