import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getBeer() {
    //This is the get request for the information back from the API
    return this.http.get('https://api.openbrewerydb.org/breweries')
    
  }
}
