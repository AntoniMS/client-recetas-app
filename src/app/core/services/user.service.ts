import { Injectable } from '@angular/core';
import { InterUser } from '../models/user';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private endpoint: string = 'https://recetas-api.vercel.app/api/user';
  public headers = new HttpHeaders().set('Content-Type', 'application/json');
  public currentUser: InterUser | null = null;

  constructor( private http: HttpClient,private router: Router) { }

  private handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      msg = error.error.message;
    } else {
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;

    }
    return throwError(msg);
  }

  public signUp(user: InterUser): Observable<any> {
    let url = `${this.endpoint}`;
    return this.http.post(url, user)
      .pipe( catchError(this.handleError))
  }

  public singIn(user: InterUser) {
    return this.http.post<any>(`${this.endpoint}/login`, user)
    .subscribe((res: any) => {
      localStorage.setItem('access_token', res)
    })
  }
  public getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = this.getToken();
    return (authToken !== null) ? true : false;
  }

  public doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['']);
    }
  }

  public getUserProfile(id: string): Observable<any> {
    let api = `${this.endpoint}/${id}`;
    return this.http.get(api, {headers: this.headers }).pipe(
      map((res: any) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }
}
