import { legacy_createStore, applyMiddleware } from 'redux'
import { ICartState } from './modules/cart/types';
import rootReducer from './modules/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './modules/rootSaga';

export interface IState {
  cart: ICartState;
}

const sagaMiddleWare = createSagaMiddleware();

const middlewares = [sagaMiddleWare];

const store = legacy_createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middlewares)
));

sagaMiddleWare.run(rootSaga)

export default store