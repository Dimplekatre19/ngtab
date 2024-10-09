import { Component, OnInit } from '@angular/core';
import { Itab } from '../../models/tab';

@Component({
  selector: 'app-tab-for',
  templateUrl: './tab-for.component.html',
  styleUrls: ['./tab-for.component.scss']
})
export class TabForComponent implements OnInit {
  selectedframework:string="React";
  tabarr:Array<Itab>=[
    {
      tabtitle:"Angular-12",
      tabcontent:" <strong>Angular</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe blanditiis voluptatibus ut nemo, inventore, tenetur laudantium numquam ipsam ex quo expedita sequi repellat beatae.",
      frameworkname:'angular'
    },
    {
      tabtitle:"React-18",
      tabcontent:" <strong>React</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe blanditiis voluptatibus ut nemo, inventore, tenetur laudantium numquam ipsam ex quo expedita sequi repellat ,beatae.",
      frameworkname:'react'
    },
    {
      tabtitle:"Vue-20",
      tabcontent:" <strong>Vue</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe blanditiis voluptatibus ut nemo, inventore, tenetur laudantium numquam ipsam ex quo expedita sequi repellat beatae.",
      frameworkname:'vue'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  onTabClick(val:string){
    //console.log(val)
    this.selectedframework=val;
  }

}
