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
  // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
}
