import { Component } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DashboardComponent],
  template: '<app-dashboard></app-dashboard>',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
