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
    stock: 5,
    image: 'assets/img/alamos.jpg',
    clearance: false,
    quantity: 0,
    },
  {
    name: "Cordero con piel de lobo",
    type: "Malbec",
    price: 3500,
    stock: 50,
    image: 'assets/img/cordero-con-piel-de-lobo.jpg',
    clearance: true,
    quantity: 0,
  },
  {
    name: "San Felipe",
    type: "Cabernet Sauvignon",
    price: 6000,
    stock: 25,
    image: 'assets/img/san-felipe.jpg',
    clearance: false,
    quantity: 0,

  },
   {
    name: "Rutini",
    type: "Malbec",
    price: 12000,
    stock: 0,
    image: 'assets/img/rutini.jpg',
    clearance: false,
    quantity: 0,
  }
  ]
  // poniendole : Wine le indica el tipo que es wine
  upQuantity(wine: Wine): void {
    if(wine.quantity < wine.stock)
      wine.quantity++;
  }

  downQuantity(wine: Wine): void {
      if( wine.quantity > 0)
        wine.quantity--;
  }
  //Dentro del event esta todo lo que hizo el usuario. El target se refiere a todo el input que estamos editando. 
  //Si el keyCode esta entre un 0 y 9 esta bien, sino hay que tirar el event.preventDefault()
  /*
  changeQuantity(event: any, wine: Wine): void {
    console.log(event);
  }
  */
}