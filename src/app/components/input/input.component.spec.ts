import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';
import { By } from '@angular/platform-browser';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar o componente', () => {
    expect(component).toBeDefined();
  });

  it('Deve exibir o input com o placeholder', () => {
    const placeholder = 'placeholder teste';
    component.placeholder = placeholder;
    fixture.detectChanges();

    let comp = fixture.debugElement.query(By.css('input'));
    expect(comp.attributes['placeholder']).toEqual(placeholder);
  });

  it('Deve exibir o input com o valor', () => {
    const valor = 'valor teste';
    component.value = valor;
    fixture.detectChanges();

    let comp = fixture.debugElement.query(By.css('input'));
    expect(comp.nativeElement.value).toEqual(valor);
  });

  it('Deve exibir o input sem valor', () => {
    fixture.detectChanges();

    let comp = fixture.debugElement.query(By.css('input'));
    expect(comp.nativeElement.value).toEqual('');
  });

  it('Deve renderizar o input desabilitado', () => {
    component.disabled = true;
    fixture.detectChanges();

    let comp = fixture.debugElement.query(By.css('input'));
    expect(comp.attributes['disabled']).toBeDefined();
  });

  it('Nao deve renderizar o input desabilitado', () => {
    component.disabled = false;
    fixture.detectChanges();

    let comp = fixture.debugElement.query(By.css('input'));
    expect(comp.attributes['disabled']).not.toBeDefined();
  });

  it('Deve renderizar o input de sucesso', () => {
    component.success = true;
    fixture.detectChanges();

    let comp = fixture.debugElement.query(By.css('input'));
    expect(comp.styles['color']).toEqual('rgb(99, 186, 104)');
  });

  it('Deve renderizar o input de error', () => {
    component.error = true;
    fixture.detectChanges();

    let comp = fixture.debugElement.query(By.css('input'));
    console.log(comp.styles['color']);
    expect(comp.styles['color']).toEqual('rgb(236, 0, 0)');
  });

  it('Deve renderizar o input com nome', () => {
    component.name = 'input-teste';
    fixture.detectChanges();

    let comp = fixture.debugElement.query(By.css('input'));
    expect(comp.attributes['name']).toEqual(component.name);
  });

  it('Deve renderizar com css customizado', () => {
    component.className = 'xpto';
    fixture.detectChanges();

    let comp = fixture.debugElement.query(By.css('input'));
    expect(comp.attributes['class']).toContain('xpto');
  });

  it('Deve renderizar com tamanho customizado', () => {
    component.height = 10;
    component.width = 30;
    fixture.detectChanges();

    let comp = fixture.debugElement.query(By.css('input'));
    expect(comp.styles['height']).toEqual(component.height + 'px');
    expect(comp.styles['width']).toEqual(component.width + 'px');
  });

  it('Nao deve renderizar um icone', () => {
    component.icon = '';
    fixture.detectChanges();

    const div = fixture.nativeElement.childNodes[0];
    const input: HTMLElement = div.childNodes[0];

    // 0 = input, 1 = span (icon), 2 = comment
    expect(div.childNodes.length).toEqual(2);
    expect(input.tagName).toEqual('INPUT');
  });

  it('Deve renderizar um icone', () => {
    component.icon = 'eye';
    fixture.detectChanges();

    const div = fixture.nativeElement.childNodes[0];
    const span: HTMLElement = div.childNodes[1];

    // 0 = input, 1 = span (icon), 2 = comment
    expect(div.childNodes.length).toEqual(3);
    expect(span.tagName).toEqual('SPAN');
    expect(span.className).toContain('icon');
  });

  it('Deve renderizar o input de senha', () => {
    component.type = 'password';
    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('input');

    expect(input.type).toEqual('password');
  });

  it('Deve disparar o evento change', () => {
    const valorFinal = '123';
    component.value = 'ABC';
    fixture.detectChanges();
    spyOn(component.valueChanged, 'emit');

    const input = fixture.nativeElement.querySelector('input');
    input.value = valorFinal; //chage value
    input.dispatchEvent(new Event('change'));

    expect(component.valueChanged.emit).toHaveBeenCalledTimes(1);
    expect(component.value).toEqual(valorFinal);
  });

  it('Deve disparar o evento click no icone', () => {
    component.icon = 'eye';
    fixture.detectChanges();
    spyOn(component.iconClick, 'emit');

    const icon = fixture.nativeElement.querySelector('span');
    icon.dispatchEvent(new Event('click'));

    expect(component.iconClick.emit).toHaveBeenCalledTimes(1);
  });
});
