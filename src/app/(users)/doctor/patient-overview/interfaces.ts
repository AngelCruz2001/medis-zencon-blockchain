interface DisplayAppointment {
  date: string;
  doctorName: string;
  diagnostic: string;
  summary: string;
  additionalNotes: string;
  followUp: string;
  patientAge: string;
  weight: string;
  height: string;
  prescription: {
    name: string;
    instructions: string;
  }[];
}
