import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from '../../../../../shared/shared-module';
import { DialogRef } from '@angular/cdk/dialog';
import { Settings } from '../../../../../core/services/settings';
import { CreateUserResponse } from '../../../../../core/interfaces/createUser.interfacet';
import { isValidApiResponse } from '../../../../../core/utils/apiUtils';

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
  private dialogRef : DialogRef<CreateUserResponse | void>,
  private settingsService : Settings
  ){}
  ngOnInit(): void {
    this.initForm();
  }

  get DD() {
    return 0
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

  onSubmit(){
    console.log('form', this.form)
    if(this.form.valid){
      this.settingsService.createUser(this.form.value).subscribe((res:CreateUserResponse)=>{
        if(isValidApiResponse(res)){
        this.dialogRef.close(res);
        }
      })
    }
  }

  onCancel(){
  this.dialogRef.close();
  }
}
