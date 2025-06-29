import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {

  //El input hacen que funcionen los []
  //Recibimos lo que nos pasa el componente padre gracias al @input
  @Input()
  //Use ! para indicarle que confíe en que será inicializada
  quantity!: number;
  @Input()
  max!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  //Variable para emitir el evento  cada vez que el stock llega al maximo
  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

   // poniendole : Wine le indica el tipo que es wine
  upQuantity(): void {
    if(this.quantity < this.max){
      this.quantity++;
      //El emit junto con el Output hace funcionen los  ()
      // al .emit() siempre hay que decirle que tiene que cambiar, sino no sabe 
      this.quantityChange.emit(this.quantity);
    }else {
      this.maxReached.emit("Se alcanzo el max");
    }
      
  }

  downQuantity(): void {
      if(this.quantity > 0){
        this.quantity--;
        this.quantityChange.emit(this.quantity);
      }
  }
  //Dentro del event esta todo lo que hizo el usuario. El target se refiere a todo el input que estamos editando. 
  //Si el keyCode esta entre un 0 y 9 esta bien, sino hay que tirar el event.preventDefault()
  /*
  changeQuantity(event: any, wine: Wine): void {
    console.log(event.key);
  }
  */
}
