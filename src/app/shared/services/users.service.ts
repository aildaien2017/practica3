import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../model/user';
import { Observable } from 'rxjs/Observable';

import {NgForm} from "@angular/forms";

const USERS_API = 'http://localhost:3000/users';
const USER_API = 'http://localhost:3000/users';

const BASE_PICTURE = 'https://image.tmdb.org/t/p/w160';


@Injectable()
export class UsersService {
  private headers = new Headers({'Content-Type': 'aplication7json'});
  constructor(private httpClient: HttpClient) { }
  
    getUsers(): Observable<any> {
      return this.httpClient.get(`
              ${USERS_API}`);
    }
    getUser(id: number): Observable<any> {
      return this.httpClient.get(`
              ${USER_API}/${id}`);
    }
    
    updateUser(user: User): Observable<User> {
      return this.httpClient.put<User>(`
        ${USER_API}/${user.id}`, user);
    }

    addUser(form: NgForm): Observable<NgForm> {
      
      return this.httpClient.post<NgForm>(`
        ${USER_API}`,
        {
          "firstName": form.value.firstName,
          "lastName": form.value.lastName,
          "street": form.value.street,
          "city": form.value.city,
          "gender": form.value.gender,
          "email": form.value.email,
          "pictureURL": form.value.pictureURL
        })
    }

   
    deleteUser(id: string | number): Observable<any> {
      return this.httpClient.delete(`
      ${USER_API}/${id}`);
    }
   
    getPictureURL(posterPath: string): string {
      return `${BASE_PICTURE}/${posterPath}`;
    }
   
}
