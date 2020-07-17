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

storiesOf('Icons', module)
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
.add('Items', () => ({
    template: `
    <app-button icon="ArrowDown"></app-button>
    <app-button icon="Eye"></app-button>
    <app-button icon="EyeHide"></app-button>
    <app-button icon="Notification"></app-button>
    <app-button icon="RemoveRound"></app-button>
    `
}), {
  notes: { markdown: ButtonReadme }
})
