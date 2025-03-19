import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ItemListComponent } from './components/item-list/item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddItemComponent,
    ItemListComponent,
  ],
  imports: [BrowserModule, FormsModule, AddItemComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
