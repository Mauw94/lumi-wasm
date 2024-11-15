import { Component } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component.js';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from './footer/footer.component.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavigationComponent, HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { }
