export interface PrescriptionFormType {
  diagnostic: string;
  summary: string;
  additionalNotes: string;
  followUp: string;
  weight: string;
  height: string;
  prescription: PrescriptionItem[];
}

export interface PrescriptionItem {
  name: string;
  instructions: string;
}
