import { Entity, Column, ManyToOne, ObjectIdColumn, ObjectID } from "typeorm";
import { Company } from "./Company";

@Entity()
export class Employee {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @ManyToOne((type) => Company, (company) => company.employees)
  company: Company;
}
