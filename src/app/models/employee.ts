import { User } from './user';

export class Employee {
    id: number;
    name: string;
    email: string;
    mobile: string;
    address: string;
    nationalId: string;
    notes: string;
    workedSince: Date;
    salaryType: string;
    salary: number;
    user: User;
}
