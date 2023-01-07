import { Component } from '@angular/core';

@Component({
  selector: 'app-angel',
  templateUrl: './angel.component.html',
  styleUrls: ['./angel.component.css']
})
export class AngelComponent {
  private list:string[]=[
    "/poesia/assets/poemas/sangre",
    "/poesia/assets/poemas/designio-II",
  ]

  private listdev:string[]=[
    "/assets/poemas/sangre",
    "/assets/poemas/designio-II",
  ]
  get List(){
    return this.list
  }

  get Listdev(){
    return this.listdev
  }
}
