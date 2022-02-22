import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FbAuthResponse, UserModel } from './user.model';
import { catchError, Observable, Subject, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public error: Subject<string> = new Subject<string>();

  constructor(private http:HttpClient) {}

  get token(): string | null {
    const expDate: Date = new Date(localStorage.getItem('fb-token-exp') || '');
    if(new Date() > expDate) {
      this.logout();
      return null;
    }
    return localStorage.getItem('fb-token');
  }

  login(user: UserModel): Observable<any> {
    user.returnSecureToken = true;
    return this.http.post<any>(`${environment.FbAuthUrl}:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(this.setToken),
        catchError(this.handleError)
      )
  }

  logout(): void {
    this.setToken(null);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private handleError = (error: HttpErrorResponse) => {
    const {message} = error.error.error;

    switch (message) {
      case 'EMAIL_NOT_FOUND':
        this.error.next('Email not found');
        break;
      case 'INVALID_EMAIL':
        this.error.next('Invalid email');
        break;
      case 'INVALID_PASSWORD':
        this.error.next('Invalid password');
        break;
    }

    return throwError(error);
  }

  private setToken(response: FbAuthResponse | null): void {
    if(response) {
      const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
      localStorage.setItem('fb-token', response.idToken);
      localStorage.setItem('fb-uid', response.localId);
      localStorage.setItem('fb-token-exp', expDate.toString());
    } else {
      localStorage.clear();
    }
  }
}
