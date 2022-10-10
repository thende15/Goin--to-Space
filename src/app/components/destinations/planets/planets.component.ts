import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params } from '@angular/router';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {


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
  destinations: any
  ngOnInit(): void {
    this.name = {
      name: this.route.snapshot.params['name']
    }
    this.getDestinations();
    this.route.url
    
    this.route.params.subscribe(
      (params: Params) => {
        this.name.name = params['name'];
      }
    )
    this.route.data.subscribe(
      (data: Data) => {
        this.destinations = data['places']
        for (let i = 0; i < this.destinations.length; i++) {
          if (this.destinations[i].name.trim().toLowerCase() == this.name.name.trim().toLowerCase()) {
            this.planet = this.destinations[i]
            console.log(this.planet, "console checking")
            break;
          }
        }
        
      }
    )
  }
  
  getDestinations() {
    return this.getData.getData('destinations').subscribe((data) => {
      this.destinations = data
      console.log(this.destinations, "second?")
      for (let i = 0; i < this.destinations.length; i++) {
        if (this.destinations[i].name.trim().toLowerCase() == this.name.name.trim().toLowerCase()) {
          this.planet = this.destinations[i]
          console.log(this.planet, "console checking")
        }
      }
    })
    
  }
  // routeSwitching(Object: any) {
  //   for (let i = 0; i < this.destinations.length; i++) {
  //     if (this.destinations[i].name.trim().toLowerCase() == Object.name.name.trim().toLowerCase()) {
  //       this.planet = this.destinations[i];
  //       console.log(this.planet, "planet data");
  //       break
  //     }
  //   }
  //   console.log(Object, "gimme my test")
  // }

}
