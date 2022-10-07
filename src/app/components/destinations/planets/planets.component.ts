import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private getData: DataService) { }
  

  name!: string;
  //images: {png: string, webp: string},
  planet!: { name: string, description: string,  distance: string, travel: string };
  ngOnInit(): void {
    this.getDestinations();
    this.route.url
    this.planet = {
      name: this.route.snapshot.params['name'],
      description: this.route.snapshot.params['description'],
      //images: this.route.snapshot.params['name'],
      travel: this.route.snapshot.params['travel'],
      distance: this.route.snapshot.params['distance']
    }
    for (let i = 0; i < this.destinations.length; i++) {
      
      if (this.destinations[i].name == this.name) {
        this.planet = this.destinations[i]
      }
      this.route.params.subscribe(
        (params: Params) => {
          this.planet.name = params['name']
        }
      )
    }
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
