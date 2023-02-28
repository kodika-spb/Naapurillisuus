export interface User{
  uid?: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  zip: string;
  password: string;
  about?: string | null;
  role: string;
  phoneNumber?: string,
  photoURL?: string | null;
} 



/* import { UserInfo } from "firebase/auth";

export interface User extends UserInfo{
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  zip: string;
  about: string;
}
 */