import { Injectable } from '@angular/core';
import { Wine } from './wine-list/Wine';
import { BehaviorSubject } from 'rxjs';

/**
* Este servicio maneja la logica del carrito
*
*/

@Injectable({
  providedIn: 'root'
})

export class WineCartService {

  
  private _cartList: Wine[] = [];
  //El behavior subject sirve para encapsular una variable, que tiene que ser privada, se suele usar el mismo nombre pero comienza con un _ .
  cartList: BehaviorSubject<Wine[]> = new BehaviorSubject(this._cartList);

  constructor() { }

  addToCart(wine: Wine) {
    //Esta funcion me va a controlar si ya hay algun elemento igual agregado
    //al find le pasamos una arrow function, le pasamos el elemento que estamos iterando y el comparador va afuera. El wine es el que recibi por parametro
    let item = this._cartList.find((v1) => v1.name == wine.name);

    //Esto me previene que si agrega la cerveza 2 veces no me la agregue
    //Esto dice si no encontro item, agregalo
    if(!item) {
      // ...wine (Esto te clona el objeto) -> esto se llama notacion funcional y object destractoring. se puede utizar asi creo un objeto {le pongo lo que quiero, ...agrego lo que viene}
      this._cartList.push({ ... wine});
      //si ya estaba me eleva el quantity de ese producto
    } else {
      item.quantity += wine.quantity;
    }

    //Con esto le digo al behavior subject que notifique que hubo un cambio en mi variable privada
    this.cartList.next(this._cartList); //Equivalente al emitt de eventos
    //Logica del addToCart
  }

  
}
