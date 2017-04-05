export default function mapCssStyles({ styles, targetElement }) {
  for ( const cssRule in styles ) {
    targetElement.style[cssRule] = styles[cssRule];
  }

  return targetElement;
}
