import { Component } from '@angular/core';
import { BackgroundComponent } from '../background/background.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [BackgroundComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

}
