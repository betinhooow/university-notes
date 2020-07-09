import { storiesOf, moduleMetadata } from '@storybook/angular'
import { BrowserModule } from '@angular/platform-browser';
import { withA11y } from '@storybook/addon-a11y';
import { centered } from '@storybook/addon-centered/angular';

//@ts-ignore
import InputReadme from 'src/app/components/input/input.readme.md';
import { InputComponent } from 'src/app/components/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';

storiesOf('Input Component', module)
.addDecorator(withA11y)
.addDecorator(centered)
.addDecorator(
  moduleMetadata({
    declarations: [
      InputComponent
    ],
    imports: [
      BrowserModule,
      ReactiveFormsModule
    ],
    providers: [],
  })
)
.add('Default', () => {
  return {
    template: `<app-input
    name="default"
    placeholder="Hello! What's up?"
    width="350"
    ></app-input>`
  }
}, {
  notes: { markdown: InputReadme }
})
.add('Errored', () => {
  return {
    template: `<app-input
    name="errored"
    placeholder="Ops! something went wrong!"
    width="350"
    error="true"
    ></app-input>`
  }
}, {
  notes: { markdown: InputReadme }
})
.add('Success', () => {
  return {
    template: `<app-input
    name="success"
    placeholder="Vualla! ;)"
    width="350"
    success="true"
    ></app-input>`
  }
}, {
  notes: { markdown: InputReadme }
})
.add('Password', () => {
  return {
    template: `<app-input
    name="password"
    type="password"
    icon="eye"
    placeholder="Password, please"
    width="350"
    ></app-input>`
  }
}, {
  notes: { markdown: InputReadme }
})
