import { storiesOf, moduleMetadata } from '@storybook/angular';
import { BrowserModule } from '@angular/platform-browser';
import { withA11y } from '@storybook/addon-a11y';
import { centered } from '@storybook/addon-centered/angular';

//@ts-ignore
import InputReadme from 'src/app/components/input/input.readme.md';
import { withKnobs } from '@storybook/addon-knobs';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { IconComponent } from 'src/app/components/icon/icon.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { ButtonComponent } from 'src/app/components/button/button.component';

storiesOf('Card', module)
  .addDecorator(withA11y)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      declarations: [CardComponent, ButtonComponent, IconComponent],
      imports: [
        BrowserModule,
        AngularSvgIconModule,
        HttpClientModule
      ],
      providers: []
    })
  )
  .add(
    'Blue',
    () => {
      return {
        template: `<div style="width: 400px;"><app-card
        number="203"
        [date]="date"
        [dateFormalization]="null"
        name="John Doe"
        price="14500.00"
      ></app-card></div>`,
      props: {
        date: new Date()
      }
      };
    },
    {
      notes: { markdown: InputReadme }
    }
  )
  .add(
    'Yellow',
    () => {
      return {
        template: `<div style="width: 400px;"><app-card
        number="166"
        [date]="date"
        [dateFormalization]="null"
        name="John Tre"
        color="#ffcc33"
        price="11000.00"
      ></app-card></div>`,
      props: {
        date: new Date(2020, 2)
      }
      };
    },
    {
      notes: { markdown: InputReadme }
    }
  )
  .add(
    'Purple',
    () => {
      return {
        template: `<div style="width: 400px;"><app-card
        number="132"
        [date]="date"
        color="#9e3667"
        [dateFormalization]="null"
        reason="Documentação inválida"
        name="John Quo"
        price="9300.00"
      ></app-card></div>`,
      props: {
        date: new Date(2020, 12)
      }
      };
    },
    {
      notes: { markdown: InputReadme }
    }
  )
  .add(
    'Green',
    () => {
      return {
        template: `<div style="width: 400px;"><app-card
        number="93"
        [date]="date"
        color="#63ba68"
        [dateFormalization]="date"
        name="John Quin"
        price="13000.00"
      ></app-card></div>`,
      props: {
        date: new Date(2020, 5)
      }
      };
    },
    {
      notes: { markdown: InputReadme }
    }
  );
