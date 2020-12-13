import { Injectable } from '@angular/core';
import { 
    HttpClient, 
    HttpHeaders, 
    HttpParams, 
    HttpEvent, 
    HttpInterceptor, 
    HttpHandler, 
    HttpRequest } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

interface Response {
    code: string,
    email: string,
    success: boolean,
    message: string, 
    token: string,
    expireIn: string, 
}

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
};

const params = new HttpParams({fromString: 'name=foo'});


@Injectable({
    providedIn: 'root'
})

export class SiteService {  
    constructor(
        private router: Router,
        private http: HttpClient
    ) { }
    
    

    //httpOptions.headers = httpOptions.headers.set('Authorization', 'my-new-auth-token');

    /**
     * send email
     * /
     * 
    /*
    endpoint: string = "";
    sendMail(name, mail_to, message, mail_from, subject) {
    return this.http.post(
        environment.api + "handers/sendMail.hand.php", {
        name,
        mail_to,
        message,
        mail_from,
        subject
    }
    ).pipe(
        tap(
        message => console.log(message)
        )
    );
    }
    */  
    /**
    * login to dashboard 
    */
    loginDashboard(email: string, password: string){
        return this.http.post<Response>(
            environment.api + "users/login", {
            email,
            password
        }, httpOptions)
    }
}
