import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Settings } from './settings';
import { isValidApiResponse } from '../utils/apiUtils';
import { AdminSettingsRespose } from '../interfaces/settings.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminSettings {
  hoveredButtonColour: string = '';
  hoverColour: string = '';
  highlightColour: string = '';
  enabledButtonColour: string = '';

  constructor(private settingsService: Settings) {
    this.getAdminSettings();
  }

  private getAdminSettings(): void {
    this.settingsService.getAdminSettings().subscribe({
      next: (res: AdminSettingsRespose) => {
        if (isValidApiResponse(res)) {
          const data = res.data;
          this.hoveredButtonColour = data.hoveredButtonColour ?? '';
          this.hoverColour = data.hoverColour ?? '';
          this.highlightColour = data.highlightColour ?? '';
          this.enabledButtonColour = data.enabledButtonColour ?? '';
        }
      },
      error: err => {
        console.error('Failed to fetch admin settings:', err);
      }
    });
  }
}
