import { storiesOf, moduleMetadata } from '@storybook/angular';
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
      declarations: [ButtonComponent, IconComponent],
      imports: [BrowserModule, AngularSvgIconModule, HttpClientModule],
      providers: []
    })
  )
  .add(
    'Items',
    () => ({
      template: `
    <app-button icon="ArrowDown"></app-button>
    <app-button icon="Eye"></app-button>
    <app-button icon="EyeHide"></app-button>
    <app-button icon="Notification"></app-button>
    <app-button icon="RemoveRound"></app-button>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
    >
      <g fill="none" transform="translate(4 4)">
        <circle cx="20" cy="20" r="19.5" fill="#EC0000" />
        <path
          fill="#FFF"
          d="M20 10.318c.828 0 1.5.672 1.5 1.5V18.5l6.682.001c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5h-6.683l.001 6.682c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5v-6.683l-6.682.001c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5H18.5l.001-6.682c0-.828.672-1.5 1.5-1.5z"
        />
      </g>
    </svg>
    `
    }),
    {
      notes: { markdown: ButtonReadme }
    }
  );
