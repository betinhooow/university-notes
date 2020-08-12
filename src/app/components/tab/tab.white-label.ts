import styleConfig from '../../../../style-configuration.json';

export default function (
  borderColor: string = styleConfig.styleGuide.tertiaryColor5
) {
  return {
    activeTab: {
      borderLeft: `solid 6px ${borderColor}`,
    },
    headerTitle: {
      color: styleConfig.styleGuide.primaryColor,
    },
  };
}
