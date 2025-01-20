import { Owner } from './owner';

export class Pet {
    constructor(
        public id: number,
        public name: string,
        public species: string,
        public breed: string,
        public age: number,
        public owner: Owner
    ) {}
}