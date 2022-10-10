import { Injectable } from '@angular/core';
import { PlanetInterface } from 'src/app/interfaces/planet-interface';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Injectable({
  providedIn: 'root'
})
export class PlanetResolverService implements Resolve<PlanetInterface>{

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PlanetInterface> | Promise<PlanetInterface> {
    console.log(route.parent?.routeConfig?.path!, "resolverpath")
    if (route.parent?.routeConfig?.path! == 'destination') {
      return this.getData.getData(route.parent?.routeConfig?.path! + 's')
    } else {
      return this.getData.getData(route.parent?.routeConfig?.path!)
    }
    
    
  }
  constructor(private getData: DataService) { }
}
