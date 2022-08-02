import { Component, OnInit } from '@angular/core';
import {CreateItemDTO} from "../../assets/model/CreateItemDTO";
import {AddItemService} from "./add-item-.service";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  private addItemService: AddItemService;

  constructor(ais: AddItemService) {
    this.addItemService = ais;
  }

  ngOnInit(): void {
  }


  //Form controller
  model = this.newItem();

  submitted = false;
  onSubmit() {
    this.submitted = true;
    console.log(this.model.name + " " + this.model.description + " " + this.model.price + " " + this.model.stock);
    this.addItemService.addItem(this.model);

    console.log("Onsubmit finished");
  }

  newItem(){
    return new CreateItemDTO("", "", 0, 0);
  }
}
