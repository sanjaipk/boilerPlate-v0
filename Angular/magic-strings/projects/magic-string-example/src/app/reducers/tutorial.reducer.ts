
import { Tutorial } from './../models/tutorial.model'
import * as TutorialActions from './../actions/tutorial.actions'
import { Action } from '@ngrx/store';

const initialState: Tutorial = {
  name: "default",
  url: "https://google.ca"
}

export function reducer(state: Tutorial[] = [initialState], action: Action) {

  const tutorialAction = action as TutorialActions.Actions;
  switch (tutorialAction.type)
  {
    case TutorialActions.ADD_TUTORIAL:
      return [...state, tutorialAction.payload];
    case TutorialActions.REMOVE_TUTORIAL:
      const index = tutorialAction.payload;
       return [...state.slice(0, index), ...state.slice(index + 1)];;

    default:
      return state;
  }
}
