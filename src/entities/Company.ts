import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
  ObjectIdColumn,
  ObjectID,
} from "typeorm";
import { Employee } from "./Employee";

@Entity()
export class Company {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @OneToMany((type) => Employee, (employee) => employee.company)
  @JoinColumn()
  employees: Employee[];
}
