import { Component } from '@angular/core';

@Component({
  selector: 'app-dedications',
  templateUrl: './dedications.component.html',
  styleUrls: ['./dedications.component.css']
})
export class DedicationsComponent {
  private list:string[]=[
    "/assets/poemas/fiel"
  ]

  get List(){
    return this.list
  }
}
