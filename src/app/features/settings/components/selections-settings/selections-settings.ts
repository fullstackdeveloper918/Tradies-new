import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared-module';
import { SettingField } from '../../../../core/interfaces/settings.interface';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-selections-settings',
  imports: [SharedModule],
  template: `<app-settings-form [config]="selectionConfig" settingsType="selection" [sectionTitle]="'Selection Settings'"></app-settings-form>`
})
export class SelectionsSettings {
selectionConfig: SettingField[] = [
  {
    controlName: 'adminEmails',
    label: 'Selections Admin Email',
    type: 'email',
    validators: [Validators.required, Validators.email],
    placeholder: 'Selections Admin Email',
  },
  {
    controlName: 'defaultOpeningMessage',
    label: 'Selections Default Opening Message',
    type: 'quill',
  },
  {
    controlName: 'defaultClosingMessage',
    label: 'Selections Default Closing Message',
    type: 'quill',
  },
  {
    controlName: 'addJobNumber',
    label: 'Add Job Number to Selection Number?',
    type: 'checkbox',
  },
  {
    controlName: 'codePrefix',
    label: 'Selection Code',
    type: 'text',
    placeholder: 'Sel',
  },
];

}
