import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import whiteLabelStyle from './button.white-label';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() width: number = 133;
  @Input() height: number = 48;
  @Input() className: string = '';

  @Input() disabled: boolean = false;
  @Input() icon: boolean;
  @Output() btnClickEmt = new EventEmitter();

  hovered: boolean = false;
  whiteLabelStyle: object = whiteLabelStyle;

  getStyle(hovered: boolean) {
    let result = {};
    const sizeCss = {
      width: this.width + 'px',
      height: this.height + 'px',
    };

    if (this.disabled) {
      result = whiteLabelStyle['btnDisabled'];
    } else {
      result = hovered
        ? whiteLabelStyle['btnHovered']
        : whiteLabelStyle['btnDefault'];
    }

    result = Object.assign({}, result, sizeCss);
    return result;
  }

  constructor() {}

  ngOnInit() {}

  onBtnClick() {
    this.btnClickEmt.emit();
  }
}
