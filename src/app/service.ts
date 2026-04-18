import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Service {
  private link :string ="https://restaurant.stepprojects.ge/api/Products/GetAll";
  constructor(private  http: HttpClient){}

  send(){
    return this.http.get<any[]>(this.link)
  }
}
