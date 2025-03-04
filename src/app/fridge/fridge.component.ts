import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fridge',
  standalone: true,
  imports: [CommonModule], // Required for *ngFor
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.scss']
})
export class FridgeComponent {
  shelves = [
    {
      category: 'Dairy',
      items: [
        { name: 'Milk', image: 'assets/milk.png', expiryDate: '2025-03-10' },
        { name: 'Cheese', image: 'assets/cheese.png', expiryDate: '2025-03-12' }
      ]
    },
    {
      category: 'Vegetables',
      items: [
        { name: 'Carrots', image: 'assets/carrots.png', expiryDate: '2025-03-15' },
        { name: 'Lettuce', image: 'assets/lettuce.png', expiryDate: '2025-03-13' }
      ]
    },
    {
      category: 'Meat',
      items: [
        { name: 'Chicken', image: 'assets/chicken.png', expiryDate: '2025-03-08' },
        { name: 'Beef', image: 'assets/beef.png', expiryDate: '2025-03-09' }
      ]
    },
    {
      category: 'Beverages',
      items: [
        { name: 'Orange Juice', image: 'assets/orange-juice.png', expiryDate: '2025-03-20' },
        { name: 'Soda', image: 'assets/soda.png', expiryDate: '2025-04-01' }
      ]
    }
  ];

  foodItems = this.shelves.flatMap(shelf => shelf.items);

  addItem() {
    console.log('Adding item...');
  }
}
