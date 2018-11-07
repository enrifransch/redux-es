import { IncrementarAction, DecrementarAction } from './contador/contador.actions';
import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { AppState } from './app.reducers';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contador: number;

  constructor(private store: Store<AppState>) {
    this.store.select('contador').subscribe(contador => {
      this.contador = contador;
    });
  }

  incrementar() {
    const action = new IncrementarAction();
    this.store.dispatch(action);
  }

  decrementar() {
    const action = new DecrementarAction();
    this.store.dispatch(action);
  }
}
