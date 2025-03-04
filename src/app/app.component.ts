import { Component } from '@angular/core';
import { FridgeComponent } from './fridge/fridge.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FridgeComponent], // Import the FridgeComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'food-storage-app';
}
