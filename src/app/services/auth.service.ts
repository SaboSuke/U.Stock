import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    constructor(
        private router: Router,
        private http: HttpClient
    ) { }

    private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');

    setLoggedIn(value: boolean): void {
        this.loggedInStatus = value;
        localStorage.setItem('loggedIn', value.toString());
    }

    isLoggedIn() {
        return localStorage.getItem('loggedIn');
    }

    setToken(token: string): void{
        localStorage.setItem('token', token.toString());
    }
    
    getToken(){
        return localStorage.getItem('token');
    }
}
