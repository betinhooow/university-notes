import { addons } from '@storybook/addons';
import Theme from './theme';

addons.setConfig({
  theme: Theme,
  previewTabs: {
    // the order of the tabs is configured by the order here
    canvas: null, // canvas is here simply listed so its place as first tab
  },
});
