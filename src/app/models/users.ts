import { UserInfo } from "firebase/auth";

export interface User extends UserInfo{
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  zip: string;
}

export interface Client extends User {
}

export interface Volunteer extends User {
  about: string;
  role: string;
}