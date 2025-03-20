import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [], // ✅ No need to declare standalone components
  imports: [BrowserModule], // ✅ Only import necessary modules
  bootstrap: [], // ✅ Ensure AppComponent is the entry point
})
export class AppModule {}
