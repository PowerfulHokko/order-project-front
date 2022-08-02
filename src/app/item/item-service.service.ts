import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {async, Observable} from "rxjs";
import {Item} from "../../assets/model/Item";
import {environment} from "../../environments/environment";
import {ItemModule} from "./item.module";

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getAllItems() : Observable<Item[]>{
    return this.http.get<Item[]>(environment.webservice.concat("/items"));
  }

  getAllItemsResponse(){
    return this.http.get(environment.webservice.concat("/items"), {observe: 'response'});
  }
}
