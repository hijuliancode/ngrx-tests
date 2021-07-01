import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface AppState {
  message: string;
}

@Component({
  selector: 'app-simple-demo',
  templateUrl: './simple-demo.component.html',
  styleUrls: ['./simple-demo.component.scss']
})
export class SimpleDemoComponent implements OnInit {

  message$: Observable<string>;

  constructor( private store: Store<AppState> ) {
    this.message$ = this.store.select('message')
  }

  spanishMessage() {
    this.store.dispatch({ type: 'SPANISH' })
  }
  frenchMessage() {
    this.store.dispatch({ type: 'FRENCH' })
  }
  englishMessage() {
    this.store.dispatch({ type: 'ENGLISH' })
  }

  ngOnInit(): void {
  }

}
