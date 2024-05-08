import { Component } from '@angular/core';
import { BackgroundComponent } from '../background/background.component';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [BackgroundComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {

}
