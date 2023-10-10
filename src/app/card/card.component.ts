import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  produtos:string[] = []
  menuType:string = ""

  constructor() {
    this.produtos = [
      "mouse",
      "teclado",
      "fone",
      "deskpad",
      "cadeira",
      "monitor",
      "alexa",
      "joystick"
    ]
  }

  ngOnInit(): void {
  }

  adicionar() {
    this.produtos.push("Gato")
  }

  remove() {
    this.produtos.pop()
  }

  remover(index: number) {
    alert(index)
    this.produtos.splice(index,1)
  }
}
