// Initializes the `meals` service on path `/meals`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Meals } from './meals.class';
import createModel from '../../models/meals.model';
import hooks from './meals.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'meals': Meals & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app)
  };

  // Initialize our service with any options it requires
  app.use('/meals', new Meals(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('meals');

  service.hooks(hooks);
}
