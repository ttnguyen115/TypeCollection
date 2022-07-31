import { ChangeEvent, FormEvent } from "react";

export interface IParams {
  page?: string;
  slug?: string;
}

export interface IRegister {
  name: string;
  email: string;
  password: string;
  cf_password: string;
}

export type InputChange = ChangeEvent<HTMLInputElement>;
export type FormSubmit = FormEvent<HTMLFormElement>;