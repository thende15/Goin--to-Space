import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private getData: DataService) { }

  ngOnInit(): void {
    this.getDestinations();
    console.log(this.destinations, "gib")
  }
  destinations: any
  getDestinations() {
    return this.getData.getData().subscribe((data) => {
      this.destinations = [...Object.values(data)[1]]
      console.log(this.destinations, "second?")
      return this.destinations
    })
  }
}
