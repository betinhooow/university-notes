import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import whiteLabelStyle from './input.white-label';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() width: number = 240;
  @Input() height: number = 48;
  @Input() name: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string;
  @Input() disabled: boolean = false;
  @Input() error: boolean = false;
  @Input() success: boolean = false;
  @Input() className: string = '';
  @Input() value: string = '';
  @Input() icon: string;
  @Output() valueChanged = new EventEmitter<string>();
  @Output() iconClick = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  getStyle() {
    let result = {};
    let cssPassword = {};

    if (this.type === 'password') {
      cssPassword = { '-webkit-text-security': 'circle' };
    }

    const sizeCss = {
      width: this.width + 'px',
      height: this.height + 'px',
      cssPassword,
    };

    if (this.disabled) {
      result = whiteLabelStyle['inputDisabled'];
    } else if (this.success) {
      result = whiteLabelStyle['inputSuccess'];
    } else if (this.error) {
      result = whiteLabelStyle['inputError'];
    } else {
      result = whiteLabelStyle['inputDefault'];
    }

    result = Object.assign({}, result, sizeCss);
    return result;
  }

  onValueChanged(event) {
    this.value = event.target.value;
    this.valueChanged.emit(this.value);
  }

  onIconClick() {
    this.iconClick.emit();
  }
}
