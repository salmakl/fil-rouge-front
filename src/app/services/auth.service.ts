import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http:HttpClient) { }

  login(email: string, password: string):Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}authenticate`, {email, password});
  }

}
