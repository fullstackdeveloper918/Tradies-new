import { HttpParams } from '@angular/common/http';

export function buildPaginationParams(page?: number, pageSize?: number): HttpParams {
  return new HttpParams()
    .set('page', page?.toString() || '1')
    .set('pageSize', pageSize?.toString() || '10');
}
