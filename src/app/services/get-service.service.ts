import { Injectable } from '@angular/core';
import { Users } from '../Models/Users';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { config } from '../config';
@Injectable({
  providedIn: 'root'
})
export class GetServiceService {
  private Url = config.Url;

  constructor(private http: HttpClient) { }

  getAllUsers( url:string): Observable<any[]> {
    return this.http.get<any[]>(`${this.Url}${url}`);
  }
}
