import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Spinner } from './shared/components/spinner/spinner';
import { SpinnerService } from './core/services/spinner';
import { CommonModule } from '@angular/common';
import { AdminSettings } from './core/services/admin-settings';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Spinner, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  loading$: typeof this.spinnerService.loading$;
  protected title = 'rebuilding-tradies-diary';

  constructor(private spinnerService: SpinnerService, private adminSettingsServe: AdminSettings){
    this.loading$ = this.spinnerService.loading$;
  }
}
