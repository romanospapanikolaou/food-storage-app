import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ Import this
import { AddItemComponent } from '../add-item/add-item.component';
import { ItemListComponent } from '../item-list/item-list.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, AddItemComponent, ItemListComponent], // ✅ Add FormsModule here
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  searchTerm: string = '';
}
