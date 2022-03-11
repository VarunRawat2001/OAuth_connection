import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  url='http://localhost:8081/';

  constructor(private http:HttpClient) { 
    
  }

  getdata() {
    return this.http.get(`${this.url}`);
  }
  
}
