import nodemailer from "nodemailer";
export interface ItemView {
  title: string;
  class: string;
  icon: string;
}
export interface CardSkill {
  title: string;
  icon: React.ReactNode;
  points: string[];
  color: string;
}
export interface JobItem {
  id: number;
  title: string;
  date: {
    startDate: Date;
    endDate: Date | null;
  };
  company: string;
  description: string;
  tools: JobToolItem[];
}
export interface JobToolItem {
  id: number;
  title: string;
  icon: string;
}
export interface InputInterface {
  name: string;
  inputTitle: string;
  inputValue: string;
  inputError: string | null;
  active: boolean;
}
export enum Status {
  idle = "idle",
  loading = "loading",
  succeeded = "succeeded",
  failed = "failed",
  error = "error",
}
export interface FormInterface {
  status: Status;
  message: string;
  inputs: InputInterface[];
}
export interface ProjectItem {
  id: number;
  name: string;
  url: string;
  description: string;
  img: string;
}
export interface ProjectSectionType {
  title: string;
  projectsItems: ProjectItem[];
}
export interface sendMailType {
  nodemailer?: any;
  auth: {
    user: string;
    password: string;
  };
  mailData: {
    from: string;
    to: string;
    subject: string;
    html: string;
  };
}
