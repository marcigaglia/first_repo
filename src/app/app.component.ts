import { Component } from '@angular/core';

@Component({
  selector: 'ngptt-root', //nome assegnato al componente affich venga renderizzato nella pagina
 // templateUrl: '.app.component.html',best practice avere l'html in un file separato
  //template: contenuto del component renderizzato in pagina
  templateUrl: 'app.component.html',
  styles: [] //stili CSS per questo specifico componente
})
export class AppComponent {
  title = 'ngptt';
  
}
