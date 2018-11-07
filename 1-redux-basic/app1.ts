import { incrementadorAction } from './contador/contador.actions';
import {Store, createStore} from 'redux'
import { contadorReducer } from './contador/contador.reducer';

const store: Store = createStore(contadorReducer);

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(incrementadorAction)