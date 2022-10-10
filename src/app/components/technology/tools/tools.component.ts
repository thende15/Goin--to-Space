import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
    private getData: DataService) { }

    name: any
    crew!: {
      name: string, 
      role: string, 
      images: {png: string, webp: string}, 
      bio: string
    }
  ngOnInit(): void {
    this.name = {
      name: this.route.snapshot.params['name']
    }
    this.getPersonnel
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
      return this.personnel
    })
    
  }
}
