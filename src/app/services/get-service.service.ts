import { Injectable } from '@angular/core';
import { Users } from '../Models/Users';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetServiceService {
  private Url = 'https://localhost:7080/';

  constructor(private http: HttpClient) { }
  
  getAllUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.Url);
  }
}
