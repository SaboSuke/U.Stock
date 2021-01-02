import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Products } from '../classes/products';
import { 
    HttpClient, 
    HttpHeaders, 
    HttpParams, 
    HttpEvent, 
    HttpInterceptor, 
    HttpHandler, 
    HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

interface Response {
    code: string,
    email: string,
    success: boolean,
    message: string, 
    token: string,
    expireIn: string, 
}

interface Result{
    success: boolean, 
    message: string
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
        private http: HttpClient,
        private _storage: LocalStorageService
    ) { }
    
    

    //httpOptions.headers = httpOptions.headers.set('Authorization', 'my-new-auth-token');

    /**
     * @DESC send email
    */
    endpoint: string = "";
    sendMail(name: string, mail_to: string, message: string, mail_from: string, subject: string) {
        return this.http.post(
            environment.api + "handers/sendMail.hand.php", {
            name,
            mail_to,
            message,
            mail_from,
            subject
        }
        )
        // .pipe(
        //     tap(message => console.log(message))
        // );
    }

    /**
    * @DESC login to dashboard 
    */
    loginDashboard(email: string, password: string){
        return this.http.post<Response>(
            environment.api + "users/login", {
            email,
            password
        }, httpOptions)
    }

    /**
    * @DESC get product by id 
    */
    getProductById(id: any): Observable<any>{
        return this.http.get<any>(
            environment.api + "products/get-product/"+id
        )
    }

    /**
    * @DESC get all product 
    */
    fetchProducts(){
        return this.http.get<Products[]>(environment.api + "products/all-products")
    }

    /**
    * @DESC get all in stock products
    */
    fetchInStockProducts(){
        return this.http.get<Products[]>(environment.api + "products/products-in-stock")
    }

    /**
    * @DESC get all out of stock products
    */
    fetchOutOfStockProducts(){
        return this.http.get<Products[]>(environment.api + "products/products-out-of-stock")
    }

    /**
    * @DESC get all low on stock products
    */
    fetchLowOnStockProducts(){
        return this.http.get<Products[]>(environment.api + "products/products-low-on-stock")
    }
    
    /**
    * @DESC get update a product
    */
    UpdateProduct(
        name: string, 
        description: string, 
        images: Array<any>,
        price: string,
        status: string, 
        quantity: Number,
        info: string
    ){
        let product_id = this._storage.getItem('id');
        return this.http.put<Result>(environment.api + "products/edit-product/"+product_id,{
            name, 
            description, 
            images,
            price,
            status, 
            quantity,
            info
        }, httpOptions)
    }

    /**
    * @DESC get add a new product
    */
    AddProduct(){
        return this.http.get<Result>(environment.api + "products/add-product")
    }

    /**
    * @DESC update product picture
    */
    AddPicture(formdata: any){
        return this.http.post<any>(environment.api + "products/add-image",{
            formdata
        })
    }

}
