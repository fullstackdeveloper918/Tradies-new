import { Component, OnDestroy, OnInit } from '@angular/core';
import { Settings } from '../../../../core/services/settings';
import { Subject, Subscription } from 'rxjs';
import { Organisation, OrganisationsResponse } from '../../../../core/interfaces/settings.interface';
import { isValidApiResponse } from '../../../../core/utils/apiUtils';
@Component({
  selector: 'app-organisations',
  templateUrl: './organisations.html',
  styleUrl: './organisations.scss',
  standalone : false
})
export class Organisations implements OnInit, OnDestroy {
  
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  organisations: Organisation[] = [];

  constructor(private settingsService: Settings) {}

  ngOnInit(): void {
   this.initializeDatatable();
  }

  initializeDatatable() {
  this.dtOptions = {
    pagingType: 'full_numbers',
    serverSide: true,
    processing: true,
    ajax: (dataTablesParameters: any, callback) => {
      const page = Math.floor(dataTablesParameters.start / dataTablesParameters.length) + 1;
      const pageSize = dataTablesParameters.length;
      console.log('pagesize', pageSize)

      this.settingsService.getOrganisations(page, pageSize).subscribe(
        (res: unknown) => {
          console.log('res', res);
          const response = res as OrganisationsResponse;
          if (isValidApiResponse<Organisation[]>(response)) {
            this.organisations = response.data;
            callback({
              recordsTotal: response.pagination.totalCount || 10,
              recordsFiltered: response.pagination.totalCount || 10,
              data: response.data
            });
          }
        },
        (err) => {
          console.error('Error loading data:', err);
        }
      );
    },
    columns: [
      { data: 'name' },
      { data: 'createdOn' },
      { data: 'updatedOn' },
      { data: 'status' },
      {
        data: null,
        orderable: false,
        searchable: false,
        render: (data: any) => {
          return `
            <button class="btn btn-sm btn-info me-1 view-btn" title="View"><i class="fas fa-eye"></i></button>
            <button class="btn btn-sm btn-primary me-1 edit-btn" title="Edit"><i class="fas fa-edit"></i></button>
            <button class="btn btn-sm btn-danger delete-btn" title="Delete"><i class="fas fa-trash-alt"></i></button>
          `;
        }
      }
    ]
  };
}

  onAddOrganisation(): void {
    // Navigate to form or open modal
    // this.router.navigate(['/settings/organisation/create']);
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
