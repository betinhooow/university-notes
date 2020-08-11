import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import setTestId from '../../utils/setTestId';
import styleConfig from '../../../../style-configuration.json';
import Status from 'src/app/models/status.model';
import ListaPropostas from '../../interfaces/listaPropostas';
import inputWhiteLabel from '../input/input.white-label';

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
  @Input() propostas: ListaPropostas;
  @Input() filtrado: boolean = false;

  @Output() buscaProposta = new EventEmitter();
  @Output() onScroll = new EventEmitter();
  @Output() onCardClick = new EventEmitter();

  tabAtual: number;
  activeAtual: any = { status: '', color: '' };
  constructor() {}

  getTestId(element?: string) {
    return setTestId(this.testId, 'tab', element, this.index);
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
        backgroundColor: styleConfig.styleGuide.neutralColorWhite,
        color: styleConfig.styleGuide.primaryColor,
        borderLeft: `solid 2px ${this.activeAtual.config.tabColor}`,
        borderRadius: `0 4px 0 0`,
        zIndex: 1,
      };
    } else {
      return {
        backgroundColor: '#fcfcfc',
        color: styleConfig.styleGuide.neutralColorGrey75,
        border: `solid 1px ${styleConfig.styleGuide.neutralColorGrey35}`,
        borderRadius: '4px 4px 0 0',
        borderBottomStyle: 'none',
      };
    }
  }

  onCardClickEmitter(cardData): void {
    this.onCardClick.emit(cardData);
  }

  onListScroll(status: string): void {
    this.onScroll.emit(status);
  }

  getEmptyLabel(status: string = ''): string {
    if (this.filtrado) return "Nenhum resultado encontrado."
    return status.substr(-1, 1) === 's'
    ?
    `Nenhuma proposta ${status.slice(0, -1).toLowerCase()}.`
    :
    `Nenhuma proposta ${status.toLowerCase()}.`
  }
}
