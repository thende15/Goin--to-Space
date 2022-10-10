import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params } from '@angular/router';
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
    tech!: {
      name: string, 
      description: string, 
      images: {landscape: string, portrait: string}, 
  }
  ngOnInit(): void {
    this.name = {
      name: this.route.snapshot.params['name']
    }
    this.getTools()
    
    this.route.params.subscribe(
      (params: Params) => {
        this.name.name = params['name'];
      }
    )
    this.route.data.subscribe(
      (data: Data) => {
        this.tools = data['things']
        for (let i = 0; i < this.tools.length; i++) {
          if (this.tools[i].name.trim().toLowerCase() == this.name.name.trim().toLowerCase()) {
            this.tech = this.tools[i]
            console.log(this.tech, "console checking")
            break;
          }
        }
        
      }
    )
  }
  tools: any
  getTools() {
    return this.getData.getData('technology').subscribe((data) => {
      this.tools = data
      console.log(this.tools, "second?")
      for (let i = 0; i < this.tools.length; i++) {
        if (this.tools[i].name.trim().toLowerCase() == this.name.name.trim().toLowerCase()) {
          this.tech = this.tools[i]
        }
      }
    })
    
  }
}
