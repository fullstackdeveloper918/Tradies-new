import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { Dashboard as DashboardService } from '../../core/services/dashboard';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit, OnDestroy {

  $subscription! : Subscription
  toastr = inject(ToastrService);
  constructor(private _dashboardService : DashboardService){}

  ngOnInit(): void {
    this.getData();
  }

  getData(){
  //  this.$subscription = this._dashboardService.getData().subscribe((res)=>{
  //   if(res){
  //    this.toastr.success('fetchect data successfully')
  //   }
  //  })
  }

  ngOnDestroy(){
  if(this.$subscription){
  this.$subscription.unsubscribe();
  }
  }
}
