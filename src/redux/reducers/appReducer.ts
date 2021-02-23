import { InferActionsTypes } from './../store';
const INITIALIZED_SUCCESS = 'SK/APP/INITIALIZED_SUCCESS';


let initialState = {
  initialized: false as boolean
}

const appReducer = (state = initialState, action: ActionsTypes):initialStateType=> {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      }

    default:
      return state;
  }
}

export const actions = {
  initializedSuccess: () => ({type: INITIALIZED_SUCCESS} as const)
}

export const initializeApp = () => (dispatch: any) => {
  dispatch(actions.initializedSuccess());
}

export type initialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;

export default appReducer;