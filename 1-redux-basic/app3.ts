import { incrementadorAction } from './contador/contador.actions';
import { Reducer, Action } from './ngrx-fake/ngrx';
import { contadorReducer } from './contador/contador.reducer';

class Store<T> {

  constructor(
    private reducer: Reducer<T>, 
    private state: T) {
  }

  getState() {
    return this.state;
  }

  dispatch(action: Action) {
    this.state = this.reducer(this.state, action);
  }
}

const store = new Store(contadorReducer, 10) 
store.dispatch(incrementadorAction)

console.log(store.getState())