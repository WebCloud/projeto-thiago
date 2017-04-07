import mapCssStyles from '../utils/mapCssStyes';
import stateStore from '../state-store/stateStore';

const liStyes = {
  display: 'block',
  cursor: 'pointer',
  flexBasis: '13em',
  marginBottom: '2em'
}

const h3Styles = {
  marginTop: '0',
  marginBottom: '0.4em'
};

export function videoListItemElementFactory({ children = [], props }) {
  if (typeof children.slice !== 'function') {
    return undefined;
  }

  const videoListItemElement = document.createElement('li');
  videoListItemElement.onclick = () => stateStore({ state: 'video', props });

  for ( const child of children ) {
    videoListItemElement.appendChild(child);
  }

  mapCssStyles({ targetElement: videoListItemElement, styles: liStyes });

  return videoListItemElement;
}

export default function videoListItem(props = {}) {
  const { title, chanel, thumbnail } = props;

  const thumbnailImage = document.createElement('img');
  thumbnailImage.src = thumbnail;

  const titleElement = document.createElement('h3');
  titleElement.textContent = title;
  mapCssStyles({ targetElement: titleElement, styles: h3Styles });

  const chanelElement = document.createElement('span');
  chanelElement.textContent = chanel;

  return videoListItemElementFactory({ children: [thumbnailImage, titleElement, chanelElement], props });
}
