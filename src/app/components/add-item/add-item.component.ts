import { Component } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent {
  name = '';
  quantity = 1;
  expirationDate?: string;

  constructor(private itemService: ItemService) {}

  addItem() {
    if (this.name.trim()) {
      const newItem: Item = {
        id: uuidv4(),
        name: this.name,
        quantity: this.quantity,
        expirationDate: this.expirationDate,
      };
      this.itemService.addItem(newItem);
      this.name = '';
      this.quantity = 1;
      this.expirationDate = undefined;
    }
  }
}
