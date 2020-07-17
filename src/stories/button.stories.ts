import { storiesOf, moduleMetadata } from '@storybook/angular'
import { ButtonComponent } from 'src/app/components/button/button.component';
import { BrowserModule } from '@angular/platform-browser';
import { withA11y } from '@storybook/addon-a11y';
import { centered } from '@storybook/addon-centered/angular';

//@ts-ignore
import ButtonReadme from 'src/app/components/button/button.readme.md';
import { IconComponent } from 'src/app/components/icon/icon.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';

storiesOf('Button', module)
.addDecorator(withA11y)
.addDecorator(centered)
.addDecorator(
  moduleMetadata({
    declarations: [
      ButtonComponent,
      IconComponent
    ],
    imports: [
      BrowserModule,
      AngularSvgIconModule,
      HttpClientModule
    ],
    providers: [],
  })
)
.add('Default', () => ({

    template: `<app-button>Entrar</app-button>`

}), {
  notes: { markdown: ButtonReadme }
})
.add('Disabled', () => {
  return {
    template: `<app-button disabled="true">Entrar</app-button>`
  }
});
