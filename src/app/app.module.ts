import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { CrewComponent } from './components/crew/crew.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { DestinationsComponent } from './components/destinations/destinations.component';

import { DataService } from './data.service';
import { PlanetsComponent } from './components/destinations/planets/planets.component';
import { PersonnelComponent } from './components/crew/personnel/personnel.component';
import { ToolsComponent } from './components/technology/tools/tools.component';
import { PlanetResolverService } from './components/destinations/planet-resolver.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainNavComponent,
    CrewComponent, 
    TechnologyComponent, 
    DestinationsComponent, 
    PlanetsComponent, PersonnelComponent, ToolsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService,
  PlanetResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
