import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {

  constructor(private getData: DataService) { }
  
  ngOnInit(): void {
    this.getDestinations();
  }

  destinations: any
  getDestinations() {
    return this.getData.getData().subscribe((data) => {
      this.destinations = Object.keys(data)[1]
      console.log(this.destinations)
      return this.destinations
    })
  }

}
