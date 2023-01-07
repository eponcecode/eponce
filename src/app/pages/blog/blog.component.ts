import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent{
 private list:string[]=[

    "assets/poemas/rey",
    "assets/poemas/sangre"
  ]
  private listdev:string[]=[
    "/assets/poemas/rey",
    "/assets/poemas/sangre",
    "/assets/poemas/muerta",
    "/assets/poemas/descenso",
    "/assets/poemas/designio-II",
  ]
  get List(){
   return this.list
  }

  get Listdev(){
    return this.listdev
  }
}
