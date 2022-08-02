import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemListViewComponent} from "./item/item-list-view/item-list-view.component";
import {LoginComponent} from "./login/login.component";
import {AddItemComponent} from "./add-item/add-item.component";

const routes: Routes = [
  { path: 'items', component: ItemListViewComponent },
  { path: 'login', component: LoginComponent},
  { path: 'addItem', component: AddItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
