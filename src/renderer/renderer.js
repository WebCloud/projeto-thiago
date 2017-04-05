const rootElement = document.getElementById('root');
const appRoutes = {
  index: undefined,
  video: undefined
};

export default function render({ route = 'index', props } = {}) {
  let routeView = appRoutes[route];

  if (typeof routeView === 'undefined') {
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
