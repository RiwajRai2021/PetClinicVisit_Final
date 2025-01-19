export class BookAppointment{
    constructor(
        public id: number,
        public petId:number | null,
        public appointmentDate:Date,
        public reason: string,
        public additionalNotes: string
    ){}
}