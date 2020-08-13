import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import Status from 'src/app/models/status.model'
@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {
  @Input() color: string;
  @Input() testId: string;
  @Input() index?: number;
  @Input() status: Status[];
  @Input() propostas: any;
  @Input() filtrado: boolean = false;

  @Output() buscaProposta = new EventEmitter();
  @Output() onScroll = new EventEmitter();
  @Output() onCardClick = new EventEmitter();

  tabAtual: number;
  activeAtual: any = { status: '', color: '' };
  constructor() {}

  getTestId(element?: string) {
    return 'tab';
  }

  ngOnInit(): void {}

  trocarTab(statusTab) {
    this.activeAtual = this.status.find((item) => item.status === statusTab);
    this.buscaProposta.emit(statusTab);

    document.querySelector('.container').scrollTop = 0;
    window.scroll(0, 0);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['status'] && this.status) {
      this.activeAtual = this.status[0];
    }
    if (changes['propostas'] && this.propostas?.propostas.length === 0) {
      this.propostas = null;
    }
  }

  getStyle(element: string, statusTab: string) {
    if (statusTab === this.activeAtual.status) {
      return {
        backgroundColor: '#fff',
        color: '#ec0000',
        borderLeft: `solid 2px ${this.activeAtual.config.tabColor}`,
        borderRadius: `0 4px 0 0`,
        zIndex: 1,
      };
    } else {
      return {
        backgroundColor: '#fcfcfc',
        color: '#cecece',
        border: `solid 1px #ecebed`,
        borderRadius: '4px 4px 0 0',
        borderBottomStyle: 'none',
      };
    }
  }

}
