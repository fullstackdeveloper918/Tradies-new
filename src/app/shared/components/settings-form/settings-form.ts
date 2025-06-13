import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Settings } from '../../../core/services/settings';
import { SettingField } from '../../../core/interfaces/settings.interface';

@Component({
  selector: 'app-settings-form',
  templateUrl: './settings-form.html',
  styleUrl: './settings-form.scss',
  standalone : false
})
export class SettingsForm {
  @Input() config: SettingField[] = [];
  @Input() settingsType: 'variation' | 'rfi' | 'selection' = 'variation';
  @Input() sectionTitle?: string;
  @Input() highlightColor: string = '#fef3c7'; // default yellow-100

  editForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private settings: Settings
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getVSRSettings();
  }

  initForm() {
    const group: any = {};
    this.config.forEach(field => {
      group[field.controlName] = ['', field.validators || []];
    });
    this.editForm = this.fb.group(group);
  }

  getVSRSettings(){
    this.settings.getVSRSettings(this.settingsType)
    .subscribe({
      next : (res) => {
        console.log('res',res)
      }
    })
  }

  save() {
    if (this.editForm.valid) {
      this.settings.updateSettings(this.settingsType, this.editForm.value)
      .subscribe({
        next: (res) => {
          console.log('res',res)
          this.toastr.success('Settings saved!')
        },
        error: () => this.toastr.error('Failed to save settings')
      });
    } else {
      this.editForm.markAllAsTouched();
      Object.entries(this.editForm.controls).forEach(([key, ctrl]) => {
        if (ctrl.invalid) {
          const errorKeys = Object.keys(ctrl.errors || {}).join(', ');
          this.toastr.error(`${key} is invalid`, `Error: ${errorKeys}`);
        }
      });
    }
  }
}
