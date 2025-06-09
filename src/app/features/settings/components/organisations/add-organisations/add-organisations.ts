import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Settings } from '../../../../../core/services/settings';
import { Subscription } from 'rxjs';
import { isValidApiResponse } from '../../../../../core/utils/apiUtils';
import { ToastrService } from 'ngx-toastr';
import { message } from '../../../../../core/utils/toast.message';
import { Organisation } from '../../../../../core/interfaces/settings.interface';

@Component({
  selector: 'app-add-organisations',
  templateUrl: './add-organisations.html',
  styleUrl: './add-organisations.scss',
  standalone : false
})
export class AddOrganisations {
  form!: FormGroup;
  $ubscription! : Subscription

  constructor(
  private fb: FormBuilder,  
  private dialogRef: MatDialogRef<AddOrganisations>,
  private settingsService : Settings,
  private toastr: ToastrService,
  @Inject(MAT_DIALOG_DATA) public data: Organisation) {
    console.log('data',data)
  }

  ngOnInit(){
    this.initializeForm();
    if(this.DD){
      this.patchFormValue();
    }
  }

  // PATCH FORM VALUE FOR EDIT
  patchFormValue(){
    this.form.patchValue({
      name : this.data.name,
      status : this.data.status
    })
  }

  // GET DIALOG DATA
  get DD(){
    return this.data;
  }

  initializeForm(){
    this.form = this.fb.group({
    name: ['', Validators.required],
    status: ['', Validators.required],
  });
  }

  onSubmit() {
    if (this.form.valid) {
     if(this.DD){
      this.updateOrganisation();
     }
      this.createOrganisation();
    }
  }

  createOrganisation(){
    this.$ubscription =  this.settingsService.createOrganisations(this.form.value).subscribe(res =>{
    if(isValidApiResponse(res)){
      this.dialogRef.close(res);
      this.toastr.success(message.organisation)
    }
    })
  }

  updateOrganisation(){
    this.settingsService.updateOrganisations(this.form.value, this.DD).subscribe(res =>{
      if(isValidApiResponse(res)){
        this.dialogRef.close(res);
        this.toastr.success(message.updateOrganisation)
      }
    })
  }

  onCancel() {
    this.dialogRef.close();
  }

  ngOnDestroy(){
    if(this.$ubscription){
      this.$ubscription.unsubscribe();
    }
  }
}
