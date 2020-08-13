module.exports = {
  stories: [
    '../src/**/button.stories.ts',
    '../src/**/input.stories.ts',
    '../src/**/icon.stories.ts',
    '../src/**/card.stories.ts',
    '../src/**/tab.stories.ts'
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-notes',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
    '@storybook/addon-knobs'
  ],
};
