import { Action } from "@ngrx/store";

export function simpleReducer (state: string = 'Hello World', action: Action) {
  console.log(action.type, state)

  switch (action.type) {
    case 'SPANISH':
      return state = 'Hola Mundo!'
      break;
    case 'ENGLISH':
      return state = 'Hello World'
      break;
    case 'FRENCH':
      return state = 'Bonjour le monde'
      break;
    default:
      return state = state
      break;
  }
}