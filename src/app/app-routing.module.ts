import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrewComponent } from './components/crew/crew.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { HomeComponent } from './components/home/home.component';
import { TechnologyComponent } from './components/technology/technology.component';

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"}, 
  {path: "home", component: HomeComponent}, 
  {path: "destination", component: DestinationsComponent}, 
  {path: "crew", component: CrewComponent}, 
  {path: "technology", component: TechnologyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
