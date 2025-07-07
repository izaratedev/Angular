import { Component } from '@angular/core';
import {About} from './About'

@Component({
  selector: 'app-winecellar-about',
  standalone: false,
  templateUrl: './winecellar-about.component.html',
  styleUrl: './winecellar-about.component.scss'
})
export class WinecellarAboutComponent {

  Abouts: About[] = [
    {
      email: "info@winecellar.com",
      phoneNumber: "+54 9 249 123-4567",
    },
  ]

  fondo: string = "assets/img/wine-cellar.png";
}
