import { Role } from './role';

export class User {
    id: string;
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
    mobile: string;
    buisnessName: string;
    roles: Role[];
}
