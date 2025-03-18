import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private storageKey = 'food-storage-items';

  constructor() {}

  getItems(): Item[] {
    const items = localStorage.getItem(this.storageKey);
    return items ? JSON.parse(items) : [];
  }

  addItem(item: Item): void {
    const items = this.getItems();
    items.push(item);
    localStorage.setItem(this.storageKey, JSON.stringify(items));
  }

  removeItem(id: string): void {
    let items = this.getItems();
    items = items.filter((item) => item.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(items));
  }

  updateItem(updatedItem: Item): void {
    let items = this.getItems();
    const index = items.findIndex((item) => item.id === updatedItem.id);
    if (index !== -1) {
      items[index] = updatedItem;
      localStorage.setItem(this.storageKey, JSON.stringify(items));
    }
  }
}
