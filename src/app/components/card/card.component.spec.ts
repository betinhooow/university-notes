import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { By } from '@angular/platform-browser';
import { ButtonComponent } from '../button/button.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent, ButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve renderizar o card', () => {
    expect(component).toBeDefined();
  });

  it('Deve renderizar o card com os dados recebidos', () => {
    component.color = 'red';
    component.date = new Date(2020, 12, 6);
    component.name = 'John Doe',
    component.number = '166';
    component.price = '4000,00';
    component.index = 1;
    component.reason = 'Comprovante de renda inválido';
    component.testId = 'component';
    fixture.detectChanges();


    let card = fixture.debugElement.query(By.css('.card'));
    let titleCard = card.children[0].children[0].nativeElement;
    let dateCard = card.children[0].children[1].nativeElement;
    let nameCard = card.children[1].children[0].nativeElement;
    let priceCard = card.children[1].children[1].children[0].children[0].nativeElement;
    let reasonCard = card.children[1].children[1].children[0].children[1].nativeElement;

    expect(card.attributes['data-testid']).toEqual('component-card-1');
    expect(card.attributes['style']).toEqual('border-left: 6px solid red;');
    expect(titleCard.innerText).toEqual('Nº Proposta 166');
    expect(dateCard.innerText).toEqual('06/01/2021 - 00:00h');
    expect(nameCard.innerText).toEqual('John Doe');
    expect(priceCard.innerText).toEqual('R$ 4000,00');
    expect(reasonCard.innerText).toEqual('Comprovante de renda inválido');
  });

  it('Deve renderizar o card com os test ids corretos', () => {
    component.color = 'red';
    component.date = new Date();
    component.dateFormalization = new Date();
    component.name = 'John Doe',
    component.number = '166';
    component.price = 'R$ 4000,00';
    component.reason = 'Comprovante de renda inválido';
    component.index = 1;
    component.testId = 'component';
    fixture.detectChanges();


    let card = fixture.debugElement.query(By.css('.card'));
    let titleCard = card.children[0].children[0];
    let dateCard = card.children[0].children[1];
    let nameCard = card.children[1].children[0];
    let priceCard = card.children[1].children[1].children[0].children[0];
    let reasonCard = card.children[1].children[1].children[0].children[1];
    let dateFormalizationCard = card.children[1].children[1].children[0].children[2];

    expect(card.attributes['data-testid']).toEqual('component-card-1');
    expect(titleCard.attributes['data-testid']).toEqual('component-card-1-title');
    expect(dateCard.attributes['data-testid']).toEqual('component-card-1-date');
    expect(nameCard.attributes['data-testid']).toEqual('component-card-1-name');
    expect(priceCard.attributes['data-testid']).toEqual('component-card-1-price');
    expect(reasonCard.attributes['data-testid']).toEqual('component-card-1-reason');
    expect(dateFormalizationCard.attributes['data-testid']).toEqual('component-card-1-dateFormalization');
  });

  it('Deve clicar no botão do card', () => {
    spyOn(component.btnClickEmt, 'emit');

    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(component.btnClickEmt.emit).toHaveBeenCalledTimes(1);
  });
});
