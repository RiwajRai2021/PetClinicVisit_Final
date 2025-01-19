export class Pet{
    constructor(
        public id: number,
        public name:string,
        public species:string,
        public breed: string,
        public age: number | null,
        public ownerId: number | null
    ){}
}