import { Injectable } from '@angular/core';
import { PlanetInterface } from 'src/app/interfaces/planet-interface';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Injectable({
  providedIn: 'root'
})
export class PlanetResolverService implements Resolve<PlanetInterface>{

  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): PlanetInterface | Observable<PlanetInterface> | Promise<PlanetInterface> {
  //   return this.getData.getData(route.params['name'])
  // }
  constructor(private getData: DataService) { }
}
