import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {

  constructor(private getData: DataService, 
    private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.url
  }

  
  
}
