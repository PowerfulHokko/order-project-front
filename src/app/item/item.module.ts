import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListViewComponent } from './item-list-view/item-list-view.component';



@NgModule({
    declarations: [
        ItemListViewComponent
    ],
    exports: [
        ItemListViewComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ItemModule { }
