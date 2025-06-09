import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Settings } from '../../../../core/services/settings';
import { Subject } from 'rxjs';
import { Organisation, OrganisationsResponse } from '../../../../core/interfaces/settings.interface';
import { isValidApiResponse } from '../../../../core/utils/apiUtils';
import { MatDialog } from '@angular/material/dialog';
import { AddOrganisations } from './add-organisations/add-organisations';
import { DataTableDirective } from 'angular-datatables';
import { Alert } from '../../../../shared/components/alert/alert';
import { ToastrService } from 'ngx-toastr';
import { message } from '../../../../core/utils/toast.message';
@Component({
  selector: 'app-organisations',
  templateUrl: './organisations.html',
  styleUrl: './organisations.scss',
  standalone : false
})
export class Organisations implements OnInit, OnDestroy {
  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<DataTables.Settings> = new Subject<DataTables.Settings>();
  organisations: Organisation[] = [];
  constructor(private settingsService: Settings, private dialog: MatDialog, private toast : ToastrService) {}

  ngOnInit(): void {
   this.initializeDatatable();
  }

  initializeDatatable() {

    if (this.dtElement?.dtInstance) {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
        this.setupOptionsAndTrigger();
      });
    } else {
      this.setupOptionsAndTrigger();
    }
}

setupOptionsAndTrigger() {
    this.dtOptions = {
    pagingType: 'full_numbers',
    serverSide: true,
    processing: true,
    destroy : true,
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
    ],

    rowCallback: (row: Node, data: any) => {
    // Remove previous handlers to avoid duplicates
    $('.view-btn', row).off('click');
    $('.edit-btn', row).off('click');
    $('.delete-btn', row).off('click');

    // Add click handlers
    $('.view-btn', row).on('click', () => this.onView(data));
    $('.edit-btn', row).on('click', () => this.onEdit(data));
    $('.delete-btn', row).on('click', () => this.onDelete(data));

    return row;
  }

  };
  setTimeout(()=>{
    console.log('datatable triggered')
    this.dtTrigger.next(this.dtOptions)
  },250)
}

  onAddOrganisation(data?:Organisation): void {
    const dialogRef = this.dialog.open(AddOrganisations, {
      width : '500px',
      data : data
    })

    dialogRef.afterClosed().subscribe((res)=>{
      if(isValidApiResponse(res)){
        console.log('this is running')
        this.initializeDatatable();
      }
    })
    // Navigate to form or open modal
    // this.router.navigate(['/settings/organisation/create']);
  }

  onView(data: Organisation) {
  console.log('View clicked:', data);
    // Open dialog or navigate
  }

    onEdit(data: Organisation) {
      this.onAddOrganisation(data)
      console.log('Edit clicked:', data);
      // Open form/dialog for editing
    }

    onDelete(data: Organisation) {
      this.showAlert(data);
      console.log('Delete clicked:', data);
      // Confirm and delete logic
    }

    showAlert(data:Organisation) {
    this.dialog.open(Alert, {
      data: {
        title: 'Delete Organisation',
        message: 'Are you sure you want to delete this organisation?'
      }
    }).afterClosed().subscribe(confirmed => {
      if (confirmed) {
        this.deleteOrganisation(data);
      }
    });
  }

  deleteOrganisation(data:Organisation){
   this.settingsService.deleteOrganisation(data).subscribe(res =>{
    if(isValidApiResponse(res)){
      this.toast.success(message.deleteOrganisation)
      this.initializeDatatable();
    }
   })
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
