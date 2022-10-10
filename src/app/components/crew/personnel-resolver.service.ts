import { Injectable } from '@angular/core';
import { CrewInterface } from 'src/app/interfaces/crew-interface';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Injectable({
  providedIn: 'root'
})
export class PersonnelResolverService implements Resolve<CrewInterface>{

  constructor(private getData: DataService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): CrewInterface | Observable<CrewInterface> | Promise<CrewInterface> {
    return this.getData.getData(route.parent?.routeConfig?.path!)
  }
}
