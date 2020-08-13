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
import { TabComponent } from 'src/app/components/tab/tab.component';
import { ButtonComponent } from 'src/app/components/button/button.component';

storiesOf('Tab', module)
  .addDecorator(withA11y)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      declarations: [TabComponent],
      imports: [
        BrowserModule,
        AngularSvgIconModule,
        HttpClientModule
      ],
      providers: []
    })
  )
  .add(
    'Status',
    () => {
      return {
        template: `<div style="width: 900px;">
        <app-tab
          [status]="statusList"
        >
        </app-tab></div>`,
      props: {
        statusList: [
          { status: 'Em análise', qtde: 10, config: { tabColor: 'rgb(51, 102, 255)' } },
          { status: 'Pendente', qtde: 7, config: { tabColor: '#ffcc33' } },
          { status: 'Contestada', qtde: 3, config: { tabColor: 'rgb(158, 54, 103)' } },
          { status: 'Formalizada', qtde: 5, config: { tabColor: 'rgb(99, 186, 104)' } }
        ]
      }
      };
    },
    {
      notes: { markdown: InputReadme }
    }
  );
