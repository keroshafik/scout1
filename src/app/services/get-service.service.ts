import { Injectable } from '@angular/core';
import { Users } from '../Models/Users';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetServiceService {
  private Url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getAllUsers( url:string): Observable<any[]> {
    return this.http.get<any[]>(`${this.Url}${url}`);
  }
}
