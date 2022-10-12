import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleNavModal(){
    const modal = document.getElementById('navModal')
    const backDrop = document.getElementById('backDrop')
    const hamburger = document.getElementById('hamburger')
    const closeButton = document.getElementById('closeButton')
    hamburger?.classList.toggle('displayNone');
    hamburger?.classList.toggle('displayBlock');
    closeButton?.classList.toggle('displayNone');
    closeButton?.classList.toggle('displayBlock');
    backDrop?.classList.toggle('displayNone');
    backDrop?.classList.toggle('displayBlock');
    modal?.classList.toggle('displayNone');
    modal?.classList.toggle('displayFlex');
  }
}
