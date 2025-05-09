import { Component } from '@angular/core';

@Component({
  selector: 'app-wine-list',
  standalone: false,
  templateUrl: './wine-list.component.html',
  styleUrl: './wine-list.component.scss'
})
export class WineListComponent {

  wine = {
    name: "Alamos",
    type: "Malbec",
    price: 5000,
    stock: 20,
    image: 'assets/img/alamos.jpg'
  }
}
