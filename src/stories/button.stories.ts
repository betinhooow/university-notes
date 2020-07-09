import { storiesOf, moduleMetadata } from '@storybook/angular'
import { ButtonComponent } from 'src/app/components/button/button.component';
import { BrowserModule } from '@angular/platform-browser';
import { withA11y } from '@storybook/addon-a11y';
import { centered } from '@storybook/addon-centered/angular';

//@ts-ignore
import ButtonReadme from 'src/app/components/button/button.readme.md';

storiesOf('Button Component', module)
.addDecorator(withA11y)
.addDecorator(centered)
.addDecorator(
  moduleMetadata({
    declarations: [
      ButtonComponent
    ],
    imports: [
      BrowserModule
    ],
    providers: [],
  })
)
.add('Default', () => {
  return {
    template: `<app-button>Entrar</app-button>`
  }
}, {
  notes: { markdown: ButtonReadme }
})
.add('Disabled', () => {
  return {
    template: `<app-button disabled="true">Entrar</app-button>`
  }
});
