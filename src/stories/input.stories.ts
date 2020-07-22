import { storiesOf, moduleMetadata } from '@storybook/angular';
import { BrowserModule } from '@angular/platform-browser';
import { withA11y } from '@storybook/addon-a11y';
import { centered } from '@storybook/addon-centered/angular';

//@ts-ignore
import InputReadme from 'src/app/components/input/input.readme.md';
import { InputComponent } from 'src/app/components/input/input.component';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { IconComponent } from 'src/app/components/icon/icon.component';

storiesOf('Input', module)
  .addDecorator(withA11y)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      declarations: [InputComponent, IconComponent],
      imports: [
        BrowserModule,
        AngularSvgIconModule,
        HttpClientModule
      ],
      providers: []
    })
  )
  .add(
    'Default',
    () => {
      return {
        template: `<app-input
    name="default"
    placeholder="Hello! What's up?"
    width="350"
    ></app-input>`
      };
    },
    {
      notes: { markdown: InputReadme }
    }
  )
  .add(
    'Errored',
    () => {
      return {
        template: `<app-input
    name="errored"
    placeholder="Ops! something went wrong!"
    width="350"
    error="true"
    ></app-input>`
      };
    },
    {
      notes: { markdown: InputReadme }
    }
  )
  .add(
    'Success',
    () => {
      return {
        template: `<app-input
    name="success"
    placeholder="Vualla! ;)"
    width="350"
    success="true"
    ></app-input>`
      };
    },
    {
      notes: { markdown: InputReadme }
    }
  )
  .add(
    'Password',
    () => {
      const typeOptions = {
        text: 'text',
        password: 'password',
      };
      return {
        template: `<app-input
          name="password"
          [type]="typeInput"
          icon="Eye"
          placeholder="Password, please"
          width="350"
          ></app-input>`,
        props: {
          typeInput: select('type', typeOptions, typeOptions.password)
        }
      };
    },
    {
      notes: { markdown: InputReadme }
    }
  );
