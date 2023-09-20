export interface DisplayAppointment {
  date: string;
  doctorName: string;
  clinic: {
    name: string;
    address: string;
    phone: string;
  };
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

export interface Address {
  street: string;
  street2: string;
  city: string;
  zip: string;
  urbanization: string;
}

export interface Patient {
  fullname: string;
  id: string;
  gender: string;
  age: string;
  birthdate: string;
  address: Address;
}
