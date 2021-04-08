// Initializes the `ingredient_meal` service on path `/ingredient-meal`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { IngredientMeal } from './ingredient_meal.class';
import createModel from '../../models/ingredient_meal.model';
import hooks from './ingredient_meal.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'ingredient-meal': IngredientMeal & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app)
  };

  // Initialize our service with any options it requires
  app.use('/ingredient-meal', new IngredientMeal(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('ingredient-meal');

  service.hooks(hooks);
}
