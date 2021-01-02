import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  createItem(item: string, value: string): void{
    localStorage.setItem(item, value);
  }

  getItem(item_name: string){
      return localStorage.getItem(item_name);
  }
}
