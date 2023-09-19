export class Student {
    id: number;
    name: string;
    address: string;
    phone: number;
    // No need to use class name to intiliase constructor
    constructor() {
        this.id = 0;
        this.name = '';
        this.address = '';
        this.phone = 0;
    }
}

export const studentCollection: Student[] = [
    { id: 1, name: 'Harsh', address: 'sant nagar', phone: 102 },
    { id: 2, name: 'Swati', address: 'sant nagar', phone: 100 },
    { id: 3, name: 'Hriday', address: 'sant nagar', phone: 103 },
    { id: 4, name: 'Gopal', address: 'sant nagar', phone: 101 }
];

