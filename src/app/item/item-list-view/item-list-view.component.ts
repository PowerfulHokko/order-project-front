import { Component, OnInit } from '@angular/core';
import {ItemServiceService} from "../item-service.service";
import {Item} from "../../../assets/model/Item";

@Component({
  selector: 'app-item-list-view',
  templateUrl: './item-list-view.component.html',
  styleUrls: ['./item-list-view.component.css']
})
export class ItemListViewComponent implements OnInit {
   statusCode : number;
   items : Item[];

  constructor(private itemService: ItemServiceService) {
    this.items = [];
    this.statusCode = 0;
  }

  ngOnInit(): void {
    this.itemService.getAllItemsResponse().subscribe(res => this.statusCode = res.status);
    this.itemService.getAllItems().subscribe(items => this.items = items);
  }


}
