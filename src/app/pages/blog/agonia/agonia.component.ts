import { Component } from '@angular/core';

@Component({
  selector: 'app-agonia',
  templateUrl: './agonia.component.html',
  styleUrls: ['./agonia.component.css']
})
export class AgoniaComponent {
  private list:string[]=[
    "/poesia/assets/poemas/rey",
  ]
//  "/poesia/assets/poemas/muerta"
  private listdev:string[]=[
    "/assets/poemas/rey",
    "/assets/poemas/muerta",
    "/assets/poemas/descenso",
  ]

  get List(){
    return this.list
  }

  get Listdev(){
    return this.listdev
  }
}
