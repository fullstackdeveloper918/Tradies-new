import { Component } from '@angular/core';
import {
  Validators,
} from '@angular/forms';
import { SharedModule } from '../../../../shared/shared-module';
import { SettingField } from '../../../../core/interfaces/settings.interface';

@Component({
  selector: 'app-variation-settings',
  imports: [SharedModule],
  template: `<app-settings-form [config]="variationConfig" settingsType="variation" [sectionTitle]="'Variation Settings'"></app-settings-form>`,
})
export class VariationSettings {
  variationConfig: SettingField[] = [
    { controlName: 'adminEmails', label: 'Variations Admin Email', type: 'email', validators: [Validators.required, Validators.email], placeholder: 'Variations Admin Email' },
    { controlName: 'defaultOpeningMessage', label: 'Variations Default Opening Message', type: 'quill' },
    { controlName: 'defaultClosingMessage', label: 'Variations Default Closing Message', type: 'quill' },
    { controlName: 'addJobNumber', label: 'Add Job Number to Variation Number?', type: 'checkbox' },
    { controlName: 'codePrefix', label: 'Variation Code', type: 'text', placeholder: 'Var' },
  ];

}
