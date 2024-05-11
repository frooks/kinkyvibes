import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Party from './party';

@Component({
  selector: 'app-party',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './party.component.html',
  styleUrl: './party.component.css'
})

export class PartyComponent {
  partyList: Party[] = [];
  private intervalId: any;

  constructor() {
    
    this.partyList.push(new Party('PRIMAL PARTY',
                                  'Ven a nuestra fiesta estrella más cañera y conoce esta faceta del BDSM de una manera más cercana y dinámica con juegos y desafíos físicos. ',
                                  '../../assets/primal.png',
                                  0),
                        new Party('MAKE A WISH',
                                  'La fiesta para empezar donde nuestro staff tratará de cumplir los deseos que entren en nuestra Copa y de hacer match durante la noche.',
                                  '../../assets/wish.png',
                                  1),
                        new Party('KINKY FASHION NIGHT',
                                  'Prepara tu OUTFIT TOP para desfilar en la fiesta con las piezas más originales de toda España. Gana premios por atreverte a impresionar.',
                                  '../../assets/fn.webp',
                                  2),
                        new Party('SLAY & POSE',
                                  '¡1, 2, 3 Pose! Participa en la fiesta de más postureo en el mundillo. Espacios con glamour, fotógrafos profesionales para sacar las mejores fotos de perfil... Trae tus mejores galas.',
                                  '../../assets/sp.png',
                                  3),
                        new Party('BONDAGE PARTY',
                                  'Prepara tu OUTFIT TOP para desfilar en la fiesta con las piezas más originales de toda España. Gana premios por atreverte a impresionar.',
                                  '../../assets/bp.png',
                                  4),
                        new Party('MECHA PARTY',
                                  'Todo lo electrónico en la cama nos trae sensaciones increíbles... ¡Así que mostramos todas esas invenciones que nos vuelven locos y locas! Ven, toca, siente... Lo que necesites.',
                                  '../../assets/mp.png',
                                  5));
  }

  ngOnInit() {
    this.preloadImages();
    this.startInterval();
  }

  ngOnDestroy() {
    this.clearInterval()
  }

  preloadImages() {
    this.partyList.forEach(party => {
      const img = new Image();
      img.src = party.image;
    });
  }

  shiftRight() {
    if (this.partyList.length >= 3) {
      const firstThreeParties = this.partyList.slice(0, 3);
      this.partyList = this.partyList.slice(3).concat(firstThreeParties);
      this.restartInterval();
    }
  }

  shiftLeft() {
    if (this.partyList.length >= 3) {
      const lastThreeParties = this.partyList.slice(-3);
      this.partyList = lastThreeParties.concat(this.partyList.slice(0, -3));
      this.restartInterval();
    }
  }
  
  startInterval() {
    this.intervalId = setInterval(() => { this.shiftRight(); }, 8000);
  }

  clearInterval() {
    clearInterval(this.intervalId);
  }

  restartInterval() {
    this.clearInterval();
    this.startInterval();
  }

}