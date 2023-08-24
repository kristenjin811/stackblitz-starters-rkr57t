import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, AppModule],
  template: `
    <app-app></app-app>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
