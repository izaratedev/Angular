import { Component } from '@angular/core';

//Componente
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
//Esta clase, es la clase del componente
export class AppComponent {
  title = 'Wine cellar';
}

