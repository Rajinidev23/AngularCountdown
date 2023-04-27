import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:50090/api/countdown';
  private apiUrl2="http://localhost:64290/api/StopTimer";

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  getEndTimer(): Observable<any> {
    return this.http.get(this.apiUrl2);
  }
}
