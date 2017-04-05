import data from '../json/videos.json';
import videoListItem from '../video-list-item/videoListItem';
import mapCssStyles from '../utils/mapCssStyes';

const styles = {
    listStyle: 'none',
    padding: '1rem',
    margin: '0',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
};

export default function videoListView() {
  const videoList = document.createElement('ul');
  const videoListItems = data.videos.map(videoListItem);

  for ( const videoListItemElement of videoListItems ) {
    videoList.appendChild(videoListItemElement);
  }

  mapCssStyles({ targetElement: videoList, styles });

  return videoList;
}
