export default function (
  borderColor: string = "#3366ff"
) {
  return {
    card: {
      borderLeft: `solid 6px ${borderColor}`,
    },
    headerTitle: {
      color: "#ec0000",
    },
  };
}
