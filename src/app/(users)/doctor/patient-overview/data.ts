import { DisplayAppointment, Patient } from "./interfaces";

export const appointments: DisplayAppointment[] = [
  {
    date: "20 Sep 2019",
    doctorName: "Dr. Johnson",
    clinic: {
      name: "Anytown Medical Center",
      address: "456 Oak Avenue, Anytown, USA",
      phone: "(555) 123-4567",
    },
    diagnostic: "Influenza",
    summary: "Patient presented with flu symptoms.",
    additionalNotes: "Prescribed antiviral medication and plenty of fluids.",
    followUp:
      "Schedule a follow-up appointment for December, Monitor blood pressure at home regularly",
    patientAge: "18",
    weight: "60 kg",
    height: "180 cm",

    prescription: [
      {
        name: "Ibuprofen 400mg",
        instructions: "Take a pill every 4-6 hours as needed.",
      },
      {
        name: "amoxicillin",
        instructions: "Take a pill every 8 hours for 5 days",
      },
      {
        name: "Fluids",
        instructions: "Drink lots of water and clear fluids.",
      },
    ],
  },
  {
    date: "04 May 2020",
    doctorName: "Dr. Johnson",
    clinic: {
      name: "Anytown Medical Center",
      address: "456 Oak Avenue, Anytown, USA",
      phone: "(555) 123-4567",
    },
    diagnostic: "Common Cold",
    summary: "Patient presented with symptoms of a common cold.",
    additionalNotes: "Prescribed over-the-counter cold medication and rest.",
    followUp: "No follow-up appointment required.",
    patientAge: "19",
    weight: "61 kg",
    height: "181 cm",

    prescription: [
      {
        name: "Ibuprofen 400mg",
        instructions: "Take a pill every 4-6 hours as needed.",
      },
      {
        name: "amoxicillin",
        instructions: "Take a pill every 8 hours for 5 days",
      },
      {
        name: "Fluids",
        instructions: "Drink lots of water and clear fluids.",
      },
      {
        name: "Rest",
        instructions: "Get plenty of rest to recover.",
      },
    ],
  },
  {
    date: "16 Sep 2020",
    doctorName: "Dr. Johnson",
    clinic: {
      name: "Anytown Medical Center",
      address: "456 Oak Avenue, Anytown, USA",
      phone: "(555) 123-4567",
    },
    diagnostic: "Allergic Rhinitis",
    summary: "Patient presented with allergy symptoms.",
    additionalNotes:
      "Prescribed antihistamines and advised to avoid allergens.",
    followUp: "No follow-up appointment required.",
    patientAge: "20",
    weight: "62 kg",
    height: "182 cm",

    prescription: [
      {
        name: "Ibuprofen 400mg",
        instructions: "Take a pill every 4-6 hours as needed.",
      },
      {
        name: "amoxicillin",
        instructions: "Take a pill every 8 hours for 5 days",
      },
      {
        name: "Fluids",
        instructions: "Drink lots of water and clear fluids.",
      },
    ],
  },
  {
    date: "04 Jul 2021",
    doctorName: "Dr. Johnson",
    clinic: {
      name: "Anytown Medical Center",
      address: "456 Oak Avenue, Anytown, USA",
      phone: "(555) 123-4567",
    },
    diagnostic: "Stomach Flu",
    summary: "Patient presented with symptoms of stomach flu.",
    additionalNotes:
      "Prescribed antiemetic medication and advised to stay hydrated.",
    followUp: "No follow-up appointment required.",
    patientAge: "21",
    weight: "63 kg",
    height: "183 cm",

    prescription: [
      {
        name: "Ibuprofen 400mg",
        instructions: "Take a pill every 4-6 hours as needed.",
      },
      {
        name: "amoxicillin",
        instructions: "Take a pill every 8 hours for 5 days",
      },
      {
        name: "Fluids",
        instructions: "Drink lots of water and clear fluids.",
      },
      {
        name: "Hydration",
        instructions: "Drink clear fluids to stay hydrated.",
      },
    ],
  },
  {
    date: "09 March 2023",
    doctorName: "Dr. Johnson",
    clinic: {
      name: "Anytown Medical Center",
      address: "456 Oak Avenue, Anytown, USA",
      phone: "(555) 123-4567",
    },
    diagnostic: "Sinusitis",
    summary: "Patient presented with symptoms of sinusitis.",
    additionalNotes: "Prescribed antibiotics and saline nasal spray.",
    followUp: "No follow-up appointment required.",
    patientAge: "22",
    weight: "64 kg",
    height: "184 cm",

    prescription: [
      {
        name: "Ibuprofen 400mg",
        instructions: "Take a pill every 4-6 hours as needed.",
      },
      {
        name: "amoxicillin",
        instructions: "Take a pill every 8 hours for 5 days",
      },
      {
        name: "Fluids",
        instructions: "Drink lots of water and clear fluids.",
      },
      {
        name: "Saline Nasal Spray",
        instructions: "Use as directed to relieve sinus congestion.",
      },
    ],
  },
];

export const patient: Patient = {
  fullname: "Ángel Eduardo Cruz García",
  id: "CRGA010603HJCNLCA4",
  gender: "Male",
  age: "22",
  birthdate: "07/03/2001",
  address: {
    street: "Calle de la Paz 154",
    street2: "",
    city: "Durango",
    zip: "34000",
    urbanization: "",
  },
};
