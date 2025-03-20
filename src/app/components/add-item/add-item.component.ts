import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent {
  name = '';
  quantity = 1;
  expirationDate?: string;

  addItem() {
    console.log('Item added:', {
      name: this.name,
      quantity: this.quantity,
      expirationDate: this.expirationDate,
    });
  }
}
