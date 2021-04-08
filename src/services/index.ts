import { Application } from '../declarations';
import meals from './meals/meals.service';
import ingredients from './ingredients/ingredients.service';
import ingredientMeal from './ingredient_meal/ingredient_meal.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(meals);
  app.configure(ingredients);
  app.configure(ingredientMeal);
}
