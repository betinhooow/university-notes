import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ButtonComponent } from './button.component';
import { AppComponent } from 'src/app/app.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, ButtonComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve renderizar o botão', () => {
    expect(component).toBeDefined();
  });

  it('Deve renderizar o botão de icone', () => {
    component.icon = true;
    fixture.detectChanges();

    let comp = fixture.debugElement.query(By.css('button'));

    expect(comp.attributes['class']).toContain('icon-button');
    expect(component).toBeDefined();
  });

  it('Deve clicar no botão', fakeAsync(() => {
    spyOn(component.btnClickEmt, 'emit');

    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(component.btnClickEmt.emit).toHaveBeenCalledTimes(1);
  }));

  it('Deve clicar no botão de icon', fakeAsync(() => {
    spyOn(component.btnClickEmt, 'emit');
    component.icon = true;
    fixture.detectChanges();

    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(component.btnClickEmt.emit).toHaveBeenCalledTimes(1);
  }));

  it('Deve renderizar o botão desabilitado', fakeAsync(() => {
    component.disabled = true;
    fixture.detectChanges();

    let button = fixture.debugElement.nativeElement.querySelector('button');
    expect(button.attributes['disabled']).toBeDefined();
  }));

  it('Deve simular o hover do botão', () => {
    component.hovered = true;
    fixture.detectChanges();

    expect(component.hovered).toBe(true);
  });

  it('Deve renderizar o botao com tamanho customizado', () => {
    component.height = 10;
    component.width = 30;
    fixture.detectChanges();

    let comp = fixture.debugElement.query(By.css('button'));

    expect(comp.styles['height']).toEqual(component.height + 'px');
    expect(comp.styles['width']).toEqual(component.width + 'px');
  });

  it('Deve renderizar com css customizado', () => {
    component.className = 'xpto';
    fixture.detectChanges();

    let comp = fixture.debugElement.query(By.css('button'));
    expect(comp.attributes['class']).toContain('xpto');
  });
});
