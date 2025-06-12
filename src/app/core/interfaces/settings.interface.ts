export interface OrganisationsResponse {
  status: number;
  success: boolean;
  message: string;
  data: Organisation[];
  pagination: Pagination;
}

export interface Organisation {
  id: number;
  uuid: string;
  name: string;
  userId: number;
  status: number;
  createdOn: string; 
  updatedOn: string; 
  deleteFlag: boolean;
  owner: Owner;
}

export interface Owner {
  uuid: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface Pagination {
  page: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  nextPage: number | null;
  prevPage: number | null;
}

export interface organisations {
  name: string;
  status: number; 
}

export interface AdminSettingsForm {
  hoverColour: string;
  highlightColour: string;
  enabledButtonColour: string;
  hoveredButtonColour: string;
  phoneNumber: string;
  mobileNumber: string;
  emailAddress: string;
  pdfCompanyName: string;
  address: string;
  adminNotificationEmail: string;
  textSignature: string;
  emailSignature: string;
  logoUrl: string;
}

export interface AdminSettings {
  hoverColour: string;
  highlightColour: string;
  enabledButtonColour: string;
  hoveredButtonColour: string;
  phoneNumber: string;
  mobileNumber: string;
  emailAddress: string;
  pdfCompanyName: string;
  address: string;
  adminNotificationEmail: string;
  textSignature: string;
  emailSignature: string;
  logoUrl: string;
  createdOn: string; // ISO date string
  updatedOn: string; // ISO date string
  deleteFlag: boolean;
  organisation: {
    uuid: string;
  };
}

export interface AdminSettingsRespose{
  status: number;
  success: boolean;
  data: AdminSettings;
}