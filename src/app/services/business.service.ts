import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Business } from 'moudels/Business';
import { Observable } from 'rxjs';

// import { user } from 'src/models/user';
@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private http:HttpClient) { }
apiUrl="https://localhost:44332/api/PersonController"
 
  getBusiness(): Observable<Business[]> {
  // return this.http.get<Car[]>(`${environment.apiUrl}/Car`);
  return this.http.get<Business[]>("https://localhost:7168/api/Customer")
}

getBusinesseById(Business: number): Observable<Business> {
  return this.http.get<Business>(`${this.apiUrl}/Business/` + Business);
}

updateBusiness(Business: Business): Observable<any> {
  return this.http.put<any>(`${this.apiUrl}/Business/`, Business);
}

// post put שליחת פרמטרים ע"י , אחרי הניתוב
addBusiness(Business: Business): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/Business`, Business);
}

deleteBusiness(Business: number): Observable<any> {
  return this.http.delete<any>(`${this.apiUrl}/Business/` + Business);
}
}

