import videoListView from '../video-list-view/videoListView';

const rootElement = document.getElementById('root');
const appRoutes = {
  index: videoListView,
  video: undefined
};

export default function render({ route = 'index', props } = {}) {
  let routeView = appRoutes[route];

  if (typeof routeView === 'undefined') {
    if (route === 'index') {
      return undefined;
    }

    routeView = appRoutes.index(props);
    history.pushState(null, null, 'index');
    console.error('No such route found');
  } else {
    routeView = routeView(props);
    const child = rootElement.firstChild;
    if (child != null) {
      child.remove();
    }

    history.pushState(null, null, route);
  }

  rootElement.appendChild(routeView);
}
