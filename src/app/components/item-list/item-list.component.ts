import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import this

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule], // ✅ Add CommonModule here
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent {
  @Input() searchTerm: string = '';

  items = [
    { name: 'Milk', quantity: 2, expirationDate: '2025-04-01' },
    { name: 'Apples', quantity: 5, expirationDate: '2025-03-25' },
  ];

  filteredItems() {
    return this.items.filter((item) =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  isExpiringSoon(date: string): boolean {
    if (!date) return false;
    const today = new Date();
    const expDate = new Date(date);
    const diffDays = (expDate.getTime() - today.getTime()) / (1000 * 3600 * 24);
    return diffDays < 3;
  }

  removeItem(itemToRemove: any) {
    this.items = this.items.filter((item) => item !== itemToRemove);
  }
}
