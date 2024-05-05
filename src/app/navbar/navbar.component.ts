import { Component } from '@angular/core';
import { WaveBackgroundComponent } from '../wave-background/wave-background.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [WaveBackgroundComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isNavbarHidden = true;

  toggleNavbar() {
    this.isNavbarHidden = !this.isNavbarHidden;
  }
}
