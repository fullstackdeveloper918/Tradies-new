import { Component, OnDestroy, OnInit } from '@angular/core';
import { Settings } from '../../../../core/services/settings';
import { userService } from '../../../../core/services/user';
import { SharedModule } from '../../../../shared/shared-module';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { UserDialog } from './user-dialog/user-dialog';
import { isValidApiResponse } from '../../../../core/utils/apiUtils';
import { CreateUserResponse, User } from '../../../../core/interfaces/createUser.interfacet';
import { Alert } from '../../../../shared/components/alert/alert';

@Component({
  selector: 'app-users',
  imports: [SharedModule],
  templateUrl: './users.html',
  styleUrl: './users.scss'
})
export class Users implements OnInit, OnDestroy {

  source : any
  $subscription!: Subscription
  constructor(
  private settingsService : Settings, 
  private userService : userService,
  private dialog : MatDialog){}

  ngOnInit(){
    console.log('organisation uuid', this.userService.getOrganisationUuid())
    this.getUsers();
  }

  ngOnDestroy(): void {
    if(this.$subscription){
      console.log('subscrption', this.$subscription)
      this.$subscription.unsubscribe();
    }
  }

  // GET USER 
  getUsers(){
  this.$subscription = this.settingsService.getOrganisationsUsers(this.userService.getOrganisationUuid()).subscribe((res:any) =>{
    this.source = res?.data
  })
  }

  // CREATE USER
  openDialog(userData?:User){
  console.log('userdaa', userData);
  const dialogRef =  this.dialog.open(UserDialog, {
    width : '600px',
    data : userData
  })
  dialogRef.afterClosed().subscribe((res:CreateUserResponse)=>{
    console.log('res',res)
    if(isValidApiResponse(res)){  
    console.log('res',res)
    this.getUsers();
    }
  })
  }

  // OPEN ALERT DIALOG
  openAlertDialog(userData : User){
     this.dialog.open(Alert, {
      data: {
        title: 'Delete User',
        message: 'Are you sure you want to delete this User?'
      }
    }).afterClosed().subscribe(confirmed => {
      if (confirmed) {
        this.deleteUser(userData);
      }
    });
  }

  // DELETE USER
  deleteUser(userData: User){
    this.settingsService.deleteUser(userData.uuid).subscribe((res:any)=>{
      console.log('user deleted', res)
    })
  }
}
