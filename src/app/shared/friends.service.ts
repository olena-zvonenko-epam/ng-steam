import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FriendsService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
}
