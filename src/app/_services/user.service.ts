import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService{
    
    constructor(private http: HttpClient, private userService: UserService) {  }

    getUser( id: number){
        const user = this.http.get<User>(`${environment.apiUrl}/api/users/${id}`, {responseType: 'json'});
        console.log(user);
        return user;
    }
    
    
}