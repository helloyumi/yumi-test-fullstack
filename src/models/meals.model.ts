// meals-model.js - A KnexJS
// 
// See http://knexjs.org/
// for more of what you can do here.
import Knex from 'knex';
import { Application } from '../declarations';

export default function (app: Application): Knex {
  const db: Knex = app.get('knexClient');
  const tableName = 'meals';
  db.schema
    .hasTable(tableName)
    .then((exists:any) => {
      if (!exists) {
        throw new Error(`${tableName} does not exist.`);
      }
    })
    .catch((e) => console.error(e));
  

  return db;
}
