import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  firebaseURL = 'https://goin--to-space-default-rtdb.firebaseio.com/'
  ext = '.json'
  // field: string = ''
  url = `${this.firebaseURL}${this.ext}`
  constructor(private http: HttpClient) { }

  getData(field: string): Observable<any> {
    this.url = `${this.firebaseURL}${field}${this.ext}`
    return this.http.get(this.url)
  }
  //crew
  //destinations
  //technology

}
