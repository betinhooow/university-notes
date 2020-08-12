import { SimpleChange } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import Proposta from 'src/app/models/proposta.model';
import Status from 'src/app/models/status.model';
import ListaPropostas from '../../interfaces/listaPropostas';
import { ButtonComponent } from '../button/button.component';
import { CardComponent } from '../card/card.component';
import { EmptyComponent } from '../empty/empty.component';
import { ListCardComponent } from '../list-card/list-card.component';

import { TabComponent } from './tab.component';

describe('TabComponent', () => {
  let component: TabComponent;
  let fixture: ComponentFixture<TabComponent>;

  const propostas: Proposta[] = [
    {
      id: '1',
      numeroProposta: '1',
      datahora: new Date(),
      clienteId: '1',
      valor: 1,
      motivoRejeicao: 'rejeicao 1',
      name: 'name 1',
    },
    {
      id: '2',
      numeroProposta: '2',
      datahora: new Date(),
      clienteId: '2',
      valor: 2,
      motivoRejeicao: 'rejeicao 2',
      name: 'name 2',
    },
  ];

  const listaProposta: ListaPropostas = {
    propostas: propostas,
    pageIndex: 1,
    pageSize: 1,
    total: 100,
  };

  let status: Status[] = [
    {
      id: '0',
      status: 'Em análise',
      config: {
        tabColor: 'red',
        order: { column: 'column', type: 'desc' },
        filterData: { column: 'column' },
      },
      qtde: '10',
    },
    {
      id: '1',
      status: 'Pendentes',
      config: {
        tabColor: 'red',
        order: { column: 'column', type: 'desc' },
        filterData: { column: 'column' },
      },
      qtde: '20',
    },
    {
      id: '2',
      status: 'Contestadas',
      config: {
        tabColor: 'red',
        order: { column: 'column', type: 'desc' },
        filterData: { column: 'column' },
      },
      qtde: '00',
    },
    {
      id: '3',
      status: 'Formalizadas',
      config: {
        tabColor: 'red',
        order: { column: 'column', type: 'desc' },
        filterData: { column: 'column' },
      },
      qtde: '15',
    },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TabComponent,
        ListCardComponent,
        EmptyComponent,
        CardComponent,
        ButtonComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve renderizar o tab', () => {
    expect(component).toBeDefined();
  });

  it('Deve exibir a tab com os Status', () => {
    component.status = status;
    fixture.detectChanges();
    const tab =
      fixture.debugElement.nativeNode.firstElementChild.firstChild.firstChild
        .firstChild.firstChild.firstChild;
    expect(tab.innerText).toEqual('Em análise');
  });

  it('Deve exibir as propostas de um Status', () => {
    component.status = status;
    component.propostas = listaProposta;
    fixture.detectChanges();
    const tab = fixture.debugElement.nativeNode.firstElementChild.innerHTML;
    expect(tab).toContain('app-list-card');
    expect(tab).toContain('app-card');
  });

  it('Deve exibir a imagem de vazio caso não tenha nenhuma proposta', () => {
    component.status = [
      {
        id: '5',
        status: 'Em análise',
        config: {
          tabColor: 'red',
          order: { column: 'column', type: 'desc' },
          filterData: { column: 'column' },
        },
        qtde: '10',
      },
    ];
    fixture.detectChanges();

    const pendentesLabel = component.getEmptyLabel('Pendentes');
    const emAnaliseLabel = component.getEmptyLabel('Em análise');
    const tab = fixture.debugElement.query(By.css('.empty'));
    expect(tab.attributes['class']).toEqual('empty');
    expect(pendentesLabel).toEqual('Nenhuma proposta pendente.');
    expect(emAnaliseLabel).toEqual('Nenhuma proposta em análise.');
  });

  it('Deve trocar de tab ao clicar em outra', () => {
    component.status = status;
    component.testId = 'home';

    spyOn(component, 'trocarTab');
    fixture.detectChanges();

    const tabSecondItem = fixture.debugElement.nativeElement.querySelector(
      'div[data-testid="home-tab-tabitem-1"]'
    );
    tabSecondItem.dispatchEvent(new Event('click'));

    expect(component.trocarTab).toHaveBeenCalledTimes(1);
  });

  it('Deve trocar o nome da tab atual ao clicar em outra', () => {
    component.status = status;
    component.propostas = listaProposta;
    fixture.detectChanges();
    const statusAtual = component.trocarTab(status[0]);

    expect(component.activeAtual).toEqual(statusAtual);
  });

  it('Deve alterar os status e propostas', () => {
    component.status = status;
    component.activeAtual = status[1];
    component.propostas = listaProposta;
    component.testId = 'home';

    component.ngOnChanges({
      status: new SimpleChange(null, [status[0], status[1]], true),
    });
    fixture.detectChanges();

    expect(component.activeAtual).toEqual(status[0]);
    component.ngOnChanges({
      propostas: new SimpleChange(null, { listaProposta }, false),
    });
    fixture.detectChanges();
    expect(component.propostas).toEqual(listaProposta);
  });

  it('Deve emitir o evento de card clique', () => {
    component.status = status;
    component.propostas = listaProposta;
    component.testId = 'home';
    spyOn(component.onCardClick, 'emit');
    fixture.detectChanges();

    let button = fixture.nativeElement.querySelector('.icon-button');
    console.log(button);
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(component.onCardClick.emit).toHaveBeenCalledTimes(1);
  });

  it('Deve renderizar o componente emptyFilter', () => {
    component.status = [
      {
        id: '5',
        status: 'Em análise',
        config: {
          tabColor: 'red',
          order: { column: 'column', type: 'desc' },
          filterData: { column: 'column' },
        },
        qtde: '10',
      },
    ];
    component.filtrado = true;
    fixture.detectChanges();

    const emAnaliseLabel = component.getEmptyLabel('Em análise');
    const tab = fixture.debugElement.query(By.css('.empty'));
    expect(tab.attributes['class']).toEqual('empty');
    expect(emAnaliseLabel).toEqual('Nenhum resultado encontrado.');
  });
});
