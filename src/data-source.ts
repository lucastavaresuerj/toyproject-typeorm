import "reflect-metadata";
import { DataSource } from "typeorm";

import * as entities from "./entities";

export const AppDataSource = new DataSource({
  type: "mongodb",
  database: "toyproject-typeorm",
  synchronize: true,
  logging: false,
  entities: Object.values(entities),
  migrations: [],
  subscribers: [],
});
