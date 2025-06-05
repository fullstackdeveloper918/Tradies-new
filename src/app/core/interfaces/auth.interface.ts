export interface Login {
    email : string,
    password : string
}

export interface LoginResponse {
  status: number;
  success: boolean;
  message: string;
  data: LoginData;
}

export interface LoginData {
  token: string;
  user: User;
}

export interface User {
  uuid: string;
  email: string;
  firstName: string;
  lastName: string;
  userRole: number;
  status: number;
  organisation: any; 
}
