import {Component, OnInit} from '@angular/core';
import {waitForAsync} from "@angular/core/testing";

@Component({
  selector: 'app-patreon',
  templateUrl: './patreon.component.html',
  styleUrls: ['./patreon.component.css']
})
export class PatreonComponent implements OnInit{

  constructor() {}

  ngOnInit(): void {
      setTimeout(() => { window.location.href = 'https://www.patreon.com/eponce'}, 2000);
  }


}
