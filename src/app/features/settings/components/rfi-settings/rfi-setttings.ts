import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared-module';
import { SettingField } from '../../../../core/interfaces/settings.interface';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-rfi',
  imports: [SharedModule],
  template: `<app-settings-form [config]="rfiConfig" settingsType="rfi" [sectionTitle]="'RFI Settings'"></app-settings-form>`

})
export class rfiSettings {

  rfiConfig: SettingField[] = [
  {
    controlName: 'adminEmails',
    label: 'RFI Admin Email',
    type: 'email',
    validators: [Validators.required, Validators.email],
    placeholder: 'RFI Admin Email',
  },
  {
    controlName: 'defaultOpeningMessage',
    label: 'RFI Default Opening Message',
    type: 'quill',
  },
  {
    controlName: 'defaultClosingMessage',
    label: 'RFI Default Closing Message',
    type: 'quill',
  },
  {
    controlName: 'addJobNumber',
    label: 'Add Job Number to RFI Number?',
    type: 'checkbox',
  },
  {
    controlName: 'codePrefix',
    label: 'RFI Code',
    type: 'text',
    placeholder: 'RFI',
  },
];

}
