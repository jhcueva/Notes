export interface NotesInterface {
  id: number;
  body: string;
  updated: Date;
  created: Date;
}

export interface NoteInterface {
  id: number;
  title: string;
  content: string;
  date: string;
}

export interface FormInputInterface {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}