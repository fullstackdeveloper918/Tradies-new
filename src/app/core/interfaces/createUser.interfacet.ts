export interface User {
  uuid: string;
  email: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  userRole: number;
  organisation: any | null; // Replace `any` with a specific type if known
  status: number;
  createdOn: string; // ISO date string
  updatedOn: string; // ISO date string
}

export interface CreateUserResponse {
  data: User;
  message: string;
  status: number;
  success: boolean;
}
