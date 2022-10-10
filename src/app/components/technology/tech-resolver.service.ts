import { Injectable } from '@angular/core';
import { TechInterface } from 'src/app/interfaces/tech-interface';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Injectable({
  providedIn: 'root'
})
export class TechResolverService implements Resolve<TechInterface>{

  constructor(private getData: DataService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): TechInterface | Observable<TechInterface> | Promise<TechInterface> {
    return this.getData.getData(route.parent?.routeConfig?.path!)
  }
}
