import { createSelector } from "reselect";

const initializeApp = (state) => {
  return state.usersPage.users;
}

/*Selectors, created by reselect library*/

export const initializeAppSelector = createSelector(
  initializeApp, (users) => {
    return users.filter(u => true);
  }
)
