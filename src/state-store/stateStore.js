import render from '../renderer/renderer';

let state = undefined;

export function popState( { state: props } ) {
  stateStore({ state: location.pathname.replace('/', ''), props, shouldPushState: false });
}

window.onpopstate = popState;

export default function stateStore({ state: newState, props, shouldPushState = true }) {
  if ( typeof newState !== 'string' || newState.length < 2 || newState === state ) {
    return;
  }

  state = newState;

  render({ route: newState, props, shouldPushState });
}
