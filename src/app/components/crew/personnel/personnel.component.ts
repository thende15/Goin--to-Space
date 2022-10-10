import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css']
})
export class PersonnelComponent implements OnInit {
  crew!: {
    name: string, 
    role: string, 
    images: {png: string, webp: string}, 
    bio: string
  }
  name: any
  constructor(private getData: DataService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.name = {
      name: this.route.snapshot.params['name']
    }
    this.getPersonnel()
    this.route.params.subscribe(
      (params: Params) => {
        this.name.name = params['name'];
      }
    )
    this.route.data.subscribe(
      (data: Data) => {
        this.personnel = data['people']
        for (let i = 0; i < this.personnel.length; i++) {
          if (this.personnel[i].name.trim().toLowerCase() == this.name.name.trim().toLowerCase()) {
            this.crew = this.personnel[i]
            console.log(this.crew, "console checking")
            break;
          }
        }
        
      }
    )
  }
  personnel: any
  getPersonnel() {
    return this.getData.getData('technology').subscribe((data) => {
      this.personnel = data
      console.log(this.personnel, "second?")
      for (let i = 0; i < this.personnel.length; i++) {
        if (this.personnel[i].name.trim().toLowerCase() == this.name.name.trim().toLowerCase()) {
          this.crew = this.personnel[i]
        }
      }
    })
    
  }
}
