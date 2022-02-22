import { Injectable } from '@angular/core';
import { UserModel } from './user.model';
import { mergeMap, Observable} from 'rxjs';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user!: UserModel;
  uid: string = localStorage.getItem('fb-uid') || '';

  constructor(private http:HttpClient) { }

  getUser(): Observable<any> {
    return this.http.get<any>(`${environment.FbDbUrl}/users/${this.uid}.json`);
  }

  updateUser(user:UserModel): Observable<any> {
    return this.http
      .patch<any>(`${environment.FbDbUrl}/users/${this.uid}.json`, user)
      .pipe(
          mergeMap(response => {
          delete response.age;
          response.idToken = localStorage.getItem('fb-token');
          response.returnSecureToken = true;
          return this.http.post<any>(`${environment.FbAuthUrl}:update?key=${environment.apiKey}`, response)
            .pipe(
              tap(response => {
                if(response?.idToken) {
                  localStorage.setItem('fb-token', response.idToken);
                }
              })
            )
        })
      )
  }
}
