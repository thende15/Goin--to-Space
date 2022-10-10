import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  [x: string]: any;

  constructor(private route: ActivatedRoute,
    private getData: DataService) { }
  

  
  // , description: string,  distance: string, travel: string, ,  
  planet!: {
    travel: any;
    description: any;
    distance: any; name: string, 
    images: {png: string, webp: string} 
  };
name: any
  ngOnInit(): void {
    this.name = {
      name: this.route.snapshot.params['name']
    }
    this.getDestinations();
    this.route.url
    this.planet = {
      name: this.route.snapshot.params['name'],
      description: this.route.snapshot.params['description'],
      images: this.route.snapshot.params['images'],
      travel: this.route.snapshot.params['travel'],
      distance: this.route.snapshot.params['distance']
    }
    
    this.route.params.subscribe(
      (params: Params) => {
        this.name.name = params['name'];
      }
    )
  }
  destinations: any
  getDestinations() {
    return this.getData.getData().subscribe((data) => {
      this.destinations = [...Object.values(data)[1]]
      console.log(this.destinations, "second?")
      for (let i = 0; i < this.destinations.length; i++) {
      
        if (this.destinations[i].name.trim().toLowerCase() == this.name.name.trim().toLowerCase()) {
          this.planet = this.destinations[i]
        }
      }
      return this.destinations
    })
    
  }

}
