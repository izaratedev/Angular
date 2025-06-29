import { Injectable } from '@angular/core';
import { Wine } from './wine-list/Wine';

/**
* Este servicio maneja la logica del carrito
*
*/

@Injectable({
  providedIn: 'root'
})

export class WineCartService {

  
  cartList: Wine[] = [];

  constructor() { }

  addToCart(wine: Wine) {
    //Esta funcion me va a controlar si ya hay algun elemento igual agregado
    let item = this.cartList.find((v1) => v1.name == wine.name);

    //Esto me previene que si agrega la cerveza 2 veces no me la agregue
    if(!item) {
      // ...wine (Esto te clona el objeto)
      this.cartList.push({... wine});
    } else {
      item.quantity += wine.quantity;
    }

    console.log(this.cartList)
  }

  
}
