import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {reducer} from '../src';

const devToolEnhancer =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const DEBUG = process.env.NODE_ENV !== 'production';
const middleware = [thunk].filter(Boolean);
const enhancer = devToolEnhancer(applyMiddleware(...middleware));
const store = createStore(combineReducers({notifications: reducer}), enhancer);

export const decorators = [
  (Story) => (
    <Provider store={store}>
        <Story />
    </Provider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}