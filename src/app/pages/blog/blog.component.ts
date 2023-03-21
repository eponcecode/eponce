import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent{
 private list:string[]=[

    "assets/poemas/angeles",
  ]
  get List(){
   return this.list
  }

    isUnAngelCollapsed = true;
    isAgoniaMelancolicaCollapsed = true;
}
