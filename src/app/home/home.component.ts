import { Component, AfterViewInit } from '@angular/core';
import { BackgroundComponent } from '../background/background.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BackgroundComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
        }
      });
    });

    const element = document.querySelector('.scrolleable-text');
    if (element) {
      observer.observe(element);
    }
  }
}
