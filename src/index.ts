import { AppDataSource } from "./data-source";
import { Company, Employee } from "./entities";

async function initialize() {
  await AppDataSource.initialize();

  console.log("Inserting a new company");
  const company = new Company();
  company.name = "Token";
  company.employees = [];
  await AppDataSource.manager.save(company);
  console.log("Saved a new company with id: " + company.id);

  console.log("Inserting a employee into the database...");
  const employee = new Employee();
  employee.firstName = "Timber";
  employee.lastName = "Saw";
  employee.age = 25;
  await AppDataSource.manager.save(employee);
  console.log("Saved a new user with id: " + employee.id);

  await AppDataSource.manager.update(Company, company.id, {
    employees: [employee],
  });

  console.log("Loading users from the database...");
  const users = await AppDataSource.manager.find(Employee);
  console.log("Loaded users: ", users);

  console.log(
    "Here you can setup and run express / fastify / any other framework."
  );
}

initialize();
