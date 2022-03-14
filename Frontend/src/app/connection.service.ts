import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  url='http://localhost:8080/create';

  constructor(private http:HttpClient) { 
    
  }

  getData(data:any):Observable<any> {
    return this.http.post(`${this.url}`,data);
  }
  
}
