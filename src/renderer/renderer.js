import videoListView from '../video-list-view/videoListView';
import videoView from '../video-view/videoView';

const rootElement = document.getElementById('root');
const appRoutes = {
  index: videoListView,
  video: videoView
};

export default function render({ route = 'index', props, shouldPushState = true } = {}) {
  let routeView = appRoutes[route];

  if (typeof routeView === 'undefined') {
    if (route === 'index') {
      return undefined;
    }

    routeView = appRoutes.index(props);

    if (shouldPushState) {
      history.pushState(props, null, 'index');
    }

    console.error('No such route found');
  } else {
    routeView = routeView(props);
    const child = rootElement.firstChild;
    if (child != null) {
      child.remove();
    }

    if (shouldPushState) {
      history.pushState(props, null, route);
    }
  }

  rootElement.appendChild(routeView);
}
