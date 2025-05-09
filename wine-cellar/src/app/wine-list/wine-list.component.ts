import { Component } from '@angular/core';
import { Wine } from './Wine'

@Component({
  selector: 'app-wine-list',
  standalone: false,
  templateUrl: './wine-list.component.html',
  styleUrl: './wine-list.component.scss'
})
export class WineListComponent {

  wines: Wine[] = [
    {
    name: "Alamos",
    type: "Malbec",
    price: 5000,
    stock: 20,
    image: 'assets/img/alamos.jpg',
    clearance: false,
    },
  {
    name: "Cordero con piel de lobo",
    type: "Malbec",
    price: 3500,
    stock: 50,
    image: 'assets/img/cordero-con-piel-de-lobo.jpg',
    clearance: true,
  },
  {
    name: "San Felipe",
    type: "Cabernet Sauvignon",
    price: 6000,
    stock: 25,
    image: 'assets/img/san-felipe.jpg',
    clearance: false,

  },
   {
    name: "Rutini",
    type: "Malbec",
    price: 12000,
    stock: 0,
    image: 'assets/img/rutini.jpg',
    clearance: false,
  }
  ]
}
