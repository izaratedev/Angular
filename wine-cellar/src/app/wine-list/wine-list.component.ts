import { Component } from '@angular/core';
import { Wine } from './Wine'
import { WineCartService } from '../wine-cart.service';

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
    price: 500,
    stock: 5,
    image: 'assets/img/alamos.jpg',
    clearance: false,
    quantity: 0,
    },
  {
    name: "Cordero con piel de lobo",
    type: "Malbec",
    price: 350,
    stock: 5,
    image: 'assets/img/cordero-con-piel-de-lobo.jpg',
    clearance: true,
    quantity: 0,
  },
  {
    name: "San Felipe",
    type: "Cabernet Sauvignon",
    price: 600,
    stock: 5,
    image: 'assets/img/san-felipe.jpg',
    clearance: false,
    quantity: 0,

  },
   {
    name: "Rutini",
    type: "Malbec",
    price: 120,
    stock: 0,
    image: 'assets/img/rutini.jpg',
    clearance: false,
    quantity: 0,
  }
  ]

  constructor(private cart: WineCartService) {
  }

  addToCart(wine: Wine): void {
  
    this.cart.addToCart(wine);
    //Al stock le descuento el wine quantity
    wine.stock -= wine.quantity;  
    //Al quantoty lo reinicio a 0 para la siguiente compra. Esto lo tengo que controlar con el cliente
    wine.quantity = 0;

    //Si el stock llega a 0, se esconde el input.
  }


  maxReached(m: string){
    alert(m);
  }
 
}