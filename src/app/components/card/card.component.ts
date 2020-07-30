import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import whiteLabelStyle from './card.white-label';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() number: string;
  @Input() date: Date;
  @Input() dateFormalization: Date;
  @Input() name: string;
  @Input() reason: string;
  @Input() price: string;
  @Input() color: string;
  @Input() testId: string;
  @Input() index?: number;

  @Output() btnClickEmt = new EventEmitter();
  constructor() {}

  getStyle(element: string) {
    return whiteLabelStyle(this.color)[element];
  }

  getTestId(element?: string) {
    return `storybook-card-${element}`;
  }

  ngOnInit(): void {}

  getFormattedDate (date: Date): string {
    return date ? formatDate(date, "dd/MM/yyyy - HH:mm'h'" , 'en-US') : '';
  }

  onClickCardButton() {
    const cardClicked = {
      number: this.number,
      date: this.date,
      dateFormalization: this.dateFormalization,
      name: this.name,
      price: this.price,
      reason: this.reason,
      color: this.color,
      testId: this.testId,
      index: this.index,
    }
    this.btnClickEmt.emit(cardClicked);
  }
}
