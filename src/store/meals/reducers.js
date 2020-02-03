import { MEALS } from "data/dummy-data";
import produce from "immer";
import { actions } from "store";

const INITAIAL_STATE = {
  meals: MEALS,
  filteredMeals: MEALS,
  favorites: []
};

const meals = produce((draft, action = {}) => {
  switch (action.type) {
    case actions.TOGGLE_FAVORITE:
      const { mealId } = action;
      const selectedMeal = draft.meals.find(meal => meal.id === mealId);
      const mealIndex = draft.favorites.findIndex(meal => meal.id === mealId);
      if (mealIndex === -1) {
        draft.favorites.push(selectedMeal);
      } else {
        draft.favorites.splice(mealIndex, 1);
      }
      break;
    case actions.FILTER_MEALS:
      const { filters } = action;
      draft.filteredMeals = draft.meals;
      Object.keys(filters).forEach(filterName => {
        if (filters[filterName] === true) {
          draft.filteredMeals = draft.filteredMeals.filter(
            filteredMeal => filteredMeal[filterName] === true
          );
        }
      });
      return;
  }
}, INITAIAL_STATE);

export default meals;
