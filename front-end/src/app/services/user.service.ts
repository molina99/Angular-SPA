import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get(`${environment.API_URL}/getUsers`);
  }

  postUser(user: object) {
    return this.http.post(`${environment.API_URL}/postUser`, user);
  }

  deleteUser(id: string) {
    return this.http.delete(`${environment.API_URL}/deleteUser/${id}`);
  }
}
