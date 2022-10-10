import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrewComponent } from './components/crew/crew.component';
import { PersonnelResolverService } from './components/crew/personnel-resolver.service';
import { PersonnelComponent } from './components/crew/personnel/personnel.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { PlanetResolverService } from './components/destinations/planet-resolver.service';
import { PlanetsComponent } from './components/destinations/planets/planets.component';
import { HomeComponent } from './components/home/home.component';
import { TechResolverService } from './components/technology/tech-resolver.service';
import { TechnologyComponent } from './components/technology/technology.component';
import { ToolsComponent } from './components/technology/tools/tools.component';

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"}, 
  {path: "home", component: HomeComponent}, 
  {path: "destination", component: DestinationsComponent, children: [
    {path: ":name", component: PlanetsComponent, resolve: {places: PlanetResolverService}}
  ]}, 
  {path: "crew", component: CrewComponent, children: [
    {path: ":name", component: PersonnelComponent, resolve: {people: PersonnelResolverService}}
  ]}, 
  {path: "technology", component: TechnologyComponent, children: [
    {path: ":name", component: ToolsComponent, resolve: {things: TechResolverService}}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
