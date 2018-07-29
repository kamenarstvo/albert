import {Component, OnInit} from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],

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
export class ContactComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
