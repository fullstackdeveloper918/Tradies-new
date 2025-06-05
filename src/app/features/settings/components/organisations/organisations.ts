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
    this.dtOptions = {
      pagingType: 'full_numbers',
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
          console.log('DataTables AJAX triggered', dataTablesParameters);
        const page = Math.floor(dataTablesParameters.start / dataTablesParameters.length) + 1;
        const pageSize = dataTablesParameters.length;

        this.settingsService.getOrganisations().subscribe(
          (res: unknown) => {
            console.log('res',res)
            const response = res as OrganisationsResponse;
            if (isValidApiResponse<Organisation[]>(response)) {
              this.organisations = response.data;
              callback({
                recordsTotal: response.pagination.totalCount,
                recordsFiltered: response.pagination.totalCount,
                data: []
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
        { data: 'owner.firstName' },
        { data: 'owner.email' },
        { data: 'status' }
      ]
    };
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
