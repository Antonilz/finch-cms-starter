import { Store } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware, { Task } from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';

import { envConfig } from '~constants/envConfig';
import rootReducer from '../reducers/rootReducer';
import rootSaga from '../sagas/rootSaga';

export const STORE_KEY = '__REDUX_STORE_INSTANCE__';
export interface SagaStore extends Store {
  sagaTask?: Task;
}

const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];

  const middleware = [...getDefaultMiddleware(), ...middlewares];

  const store = configureStore({
    reducer: rootReducer,
    devTools: envConfig.isTestEnv ? { trace: true, traceLimit: 25 } : false,
    middleware,
  });

  sagaMiddleware.run(rootSaga);

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;

export const ReduxWrapper = createWrapper<AppStore>(makeStore as () => Store, {
  storeKey: STORE_KEY,
  debug: false, // use this to debug store on server+client
  serializeState: (state) => JSON.stringify(state),
  deserializeState: (state) =>
    typeof state === 'string' ? JSON.parse(state) : state,
});
