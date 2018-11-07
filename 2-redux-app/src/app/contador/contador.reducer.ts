import {
  INCREMENTAR,
  DECREMENTAR,
  MULTIPLICAR,
  DIVIDIR,
  RESET,
  actions
} from './contador.actions';

export function contadorReducer(state: number = 10, action: actions) {

  switch (action.type) {
    case INCREMENTAR:
      return state + 1;
    case DECREMENTAR:
      return state - 1;
    case MULTIPLICAR:
      return state * action.payload;
    case DIVIDIR:
      return state / 2;
    case RESET:
      return state = 0;
    default:
      return state;
  }
}