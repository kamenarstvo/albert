import {Component, OnInit} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import {OfferService} from './offer-service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({opacity: 0}),
        animate(500)
      ]),
      transition('* => void', [
        animate(500, style({opacity: 1}))
      ])
    ])
  ]
})

export class OfferComponent implements OnInit {
  serviceTypes: [OfferService];

  constructor() {
    this.serviceTypes = [
      new OfferService('Jednohroby', './assets/image/one.jpg'),
      new OfferService('Dvojhroby', './assets/image/two.jpg'),
      new OfferService('Urnyar ové komplety', './assets/image/mini.jpg'),
      new OfferService('Písmo', './assets/image/letters.jpg'),
      new OfferService('Vázy, lampáše', './assets/image/vase.jpg'),
      new OfferService('Motívy', './assets/image/cross.jpg'),
      new OfferService('Dvíhanie', './assets/image/lift.jpg'),
      new OfferService('Čistenie, leštenie', './assets/image/clean.jpg'),
      new OfferService('Búranie', './assets/image/demolition.jpg'),
      new OfferService('Výkop', './assets/image/digging.jpg'),
      new OfferService('Dlažba chodníka', './assets/image/teils.jpg')
    ];
  }

  ngOnInit() {
  }

}
