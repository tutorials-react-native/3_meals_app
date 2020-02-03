export const getMeals = state => state.meals.meals;
export const getFilteredMeals = state => state.meals.filteredMeals;
export const getFavorites = state => state.meals.favorites;

export const isFav = mealId => state =>
  getFavorites(state).some(meal => meal.id === mealId);
