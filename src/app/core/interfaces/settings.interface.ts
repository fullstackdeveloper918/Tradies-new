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
  createdOn: string; // ISO date string
  updatedOn: string; // ISO date string
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
