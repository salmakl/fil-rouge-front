import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LogoDesignService {

  constructor(private http:HttpClient) { }
  
  saveLogoDesign(logoDesign: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}logodesign/store`, logoDesign);
  }
  
}
