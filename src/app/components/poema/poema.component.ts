import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
@Component({
  selector: 'app-poema',
  templateUrl: './poema.component.html',
  styleUrls: ['./poema.component.css']
})

export class PoemaComponent implements OnInit{
  @ViewChild('divElement') myDiv!: ElementRef;
  @Input() poemas: string[] | undefined;

  reformat(poema:string):string{
    poema=decodeURIComponent(poema)
    return poema.replaceAll("+"," ")
  }
  private list: string[] =[]
  readMultiple(){
    var index = this.poemas;
    var request = new XMLHttpRequest();
    (function loop(i, length, array) {
      // @ts-ignore
      if (i>= length) {
        return;
      }
      if (index) {
        var url = index[i];

      request.open("GET", url);
      request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE && request.status === 200) {

          array.push(request.responseText.toString())
          loop(i + 1, length,array);
        }
      }
      request.send();
    }})(0, index!.length,this.list);
  }



  get Poemas(){
    return this.list
  }
  ngOnInit() {
    if (!this.poemas) {
      throw new TypeError("'Poem' is required");
    }
    this.readMultiple();
  }


}
