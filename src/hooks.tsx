export function useHover() {
  return {
    onHoverChange: (
      event: React.MouseEvent<HTMLElement | SVGElement>,
      color: string
    ) => {
      event.currentTarget.style.color = color;
      event.currentTarget.style.fill = color;
    },
  };
}
