import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from '../../../../../shared/shared-module';
import { DialogRef } from '@angular/cdk/dialog';
import { Settings } from '../../../../../core/services/settings';
import { CreateUserResponse, User, UserUpdateResponse } from '../../../../../core/interfaces/createUser.interfacet';
import { isValidApiResponse } from '../../../../../core/utils/apiUtils';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-dialog',
  imports: [SharedModule],
  templateUrl: './user-dialog.html',
  styleUrl: './user-dialog.scss'
})
export class UserDialog implements OnInit{
  form! : FormGroup
  constructor(
  private fb: FormBuilder,
  private dialogRef : MatDialogRef<UserDialog>,
  private settingsService : Settings,
  @Inject(MAT_DIALOG_DATA ) public data : User
  ){}

  ngOnInit(): void {
    this.initForm();
    if(this.DD){
      this.patchFormValue();
    }
  }

  get DD() {
    return this.data
  }

  initForm(){
    this.form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    mobileNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    userRole: [2, Validators.required]
  });
  }

  patchFormValue(){
    this.form.patchValue(this.data)
  }

  onSubmit(){
    console.log('form', this.form)
    if(this.form.valid){
    if(this.DD){
    this.updateUser();
    } else{
      this.createUser();
    }
    }
  }

  // CREATE USER
  createUser(){
    this.settingsService.createUser(this.form.value).subscribe((res:CreateUserResponse)=>{
      if(isValidApiResponse(res)){
      this.dialogRef.close(res);
      }
    })
  }

  // UPDATE USER
  updateUser(){
   this.settingsService.updateUser(this.form.value, this.data.uuid).subscribe((res:UserUpdateResponse)=>{
    if(isValidApiResponse(res)){
     this.dialogRef.close(res)
    }
   })
  }

  onCancel(){
  this.dialogRef.close();
  }
}
