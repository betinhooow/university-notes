import { Welcome } from '@storybook/angular/demo';
import '../styles/global.scss';

import { storiesOf, moduleMetadata } from '@storybook/angular';
import { centered } from '@storybook/addon-centered/angular';

export default {
  title: 'Welcome',
  component: Welcome,
};

export const ToStorybook = () => ({
  component: Welcome,
  props: {},
});

ToStorybook.story = {
  name: 'to Atento DS',
};

