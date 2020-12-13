// import { Injectable } from '@angular/core';
// import { Observable, throwError } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
// import { environment } from 'src/environments/environment';
// import { catchError, tap } from 'rxjs/operators';
// import { error } from '@angular/compiler/src/util';
// import { Router } from '@angular/router';
// interface Response {
//   success: boolean,
//   message: string
// }
// @Injectable({
//   providedIn: 'root'
// })
// export class SiteService {
//   constructor(
//     private router: Router,
//     private http: HttpClient
//   ) { }
//   /**
//    * send email
//    * /
//    * 
//   /*
//   endpoint: string = "";
//   sendMail(name, mail_to, message, mail_from, subject) {
//     return this.http.post(
//       environment.api + "handers/sendMail.hand.php", {
//       name,
//       mail_to,
//       message,
//       mail_from,
//       subject
//     }
//     ).pipe(
//       tap(
//         message => console.log(message)
//       )
//     );
//   }
//   */
//   /**
//    * login to dashboard 
//   */
//   /*
//   loginDashboard(username: String, password: String): Observable<Response>{
//     return this.http.post<Response>(
//       environment.api + "users/login", {
//       username,
//       password
//     }
//     )
//   }*/
// }
"use strict";