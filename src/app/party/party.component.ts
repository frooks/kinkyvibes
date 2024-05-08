import { Component } from '@angular/core';
import { BackgroundComponent } from '../background/background.component';

@Component({
  selector: 'app-party',
  standalone: true,
  imports: [BackgroundComponent],
  templateUrl: './party.component.html',
  styleUrl: './party.component.css'
})
export class PartyComponent {

}
