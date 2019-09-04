import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken: any;
  user: any;

  uri: String = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  registerUser(user): Observable<Object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    }
    return this.http.post(this.uri+'/register', user, httpOptions)
  }
}
