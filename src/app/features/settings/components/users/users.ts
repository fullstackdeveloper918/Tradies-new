import { Component, OnDestroy, OnInit } from '@angular/core';
import { Settings } from '../../../../core/services/settings';
import { User } from '../../../../core/services/user';
import { SharedModule } from '../../../../shared/shared-module';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { UserDialog } from './user-dialog/user-dialog';
import { isValidApiResponse } from '../../../../core/utils/apiUtils';
import { CreateUserResponse } from '../../../../core/interfaces/createUser.interfacet';

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
  private userService : User,
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
  openDialog(){
  const dialogRef =  this.dialog.open(UserDialog, {
    width : '600px'
  })
  dialogRef.afterClosed().subscribe((res:CreateUserResponse)=>{
    if(isValidApiResponse(res)){  
    this.getUsers();
    }
  })
  }
}
