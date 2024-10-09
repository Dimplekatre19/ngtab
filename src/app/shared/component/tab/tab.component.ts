import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  selectedframework:string='Angular';
  constructor() { }

  ngOnInit(): void {
  }

  onTabClick(eve:any){
      // console.log(eve.target.getAttribute("data-frameworkname"))
      this.selectedframework=eve.target.getAttribute("data-frameworkname")
  }

}
