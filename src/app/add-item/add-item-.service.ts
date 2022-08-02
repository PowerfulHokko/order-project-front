import { Injectable } from '@angular/core';
import {CreateItemDTO} from "../../assets/model/CreateItemDTO";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AddItemService {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  addItem(item: CreateItemDTO){
    let observable = this.http.post("localhost:8080/items", item, {observe: 'response'});
    observable.subscribe(response => console.log(response.status))
  }
}
