export interface User {
  uuid: string;
  email: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  userRole: number;
  organisation: any | null; 
  status: number;
  createdOn: string;
  updatedOn: string; 
}

export interface CreateUserResponse {
  data: User;
  message: string;
  status: number;
  success: boolean;
}


export interface Organisation {
  name: string;
  uuid: string;
}

export interface UserUpdateResponse {
  data: User;
  message: string;
  status: number;
  success: boolean;
}