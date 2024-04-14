import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User1 } from 'moudels/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  // שירות
// בלי ליצור מופע
// מספק שירותים כגון פונקציות קוד שנוכל להשתמש בקומפוננטות
//  , בעיקר קריאות שרת
// Injectable- הזרקת תלויות , Depedency Injection
  constructor(private  http:HttpClient) { 
  }
  apiUrl="https://localhost:7168/api/User"



  // Observable- rxjsספרית 
  // ספריה שמנהלת את האיסכרוניות

  getUsers(): Observable<User1[]> {
    // return this.http.get<Car[]>(`${environment.apiUrl}/Car`);
    return this.http.get<User1[]>(`${this.apiUrl}/GetAllUsers`)
  }

  getUsereById(UserId: string): Observable<User1> {
    return this.http.get<User1>(`${this.apiUrl}/GetUser/${UserId}`);
  }

  updateUser(User: User1): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/User/`, User);
  }

  // post put שליחת פרמטרים ע"י , אחרי הניתוב
  addUser(User: User1): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/User`, User);
  }

  deleteUser(UserId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/User/` + UserId);
  }
}