import { Component, ElementRef, ViewChild } from '@angular/core';
import { SharedModule } from '../../../../shared/shared-module';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { Settings } from '../../../../core/services/settings';
import { Subscription } from 'rxjs';
import { isValidApiResponse } from '../../../../core/utils/apiUtils';
import { ToastrService } from 'ngx-toastr';
import { message } from '../../../../core/utils/toast.message';
import { AdminSettingsRespose } from '../../../../core/interfaces/settings.interface';

@Component({
  selector: 'app-admin-settings',
  imports: [SharedModule, QuillModule],
  templateUrl: './admin-settings.html',
  styleUrl: './admin-settings.scss'
})
export class AdminSettings {
  editForm!: FormGroup;
  showColourHover = false;
  showColourHighlight = false;
  showEnabledButton = false;
  showHoveredButton = false;
  currentPopColour = '#ffffff';
  colorBtnDefault = '#000000';
  imageURL: string | ArrayBuffer = '';
  separatorKeysCodes = [13, 188];
  selectable = true;
  removable = true;
   visiblePicker: 'hover' | 'highlight' | 'enabled' | 'hovered' | null = null;
  subscriptions = new Subscription();

  @ViewChild('myModal') myModal!: ElementRef;

  constructor(
  private fb: FormBuilder,
  private settingsService : Settings,
  private toastr : ToastrService
  ) {}

  ngOnInit() {
    this.initForm();
    this.getAdminSettings();
  }

    ngOnDestroy(){
    this.subscriptions.unsubscribe();
    }

  initForm(){
    this.editForm = this.fb.group({
      hoverColour: ['#ff0000'],
      highlightColour: ['#00ff00'],
      enabledButtonColour: ['#0000ff'],
      hoveredButtonColour: ['#ffff00'],
      phoneNumber: [''],
      mobileNumber: [''],
      emailAddress: [''],
      pdfCompanyName: [''],
      address: [''],
      adminNotificationEmail: [''],
      textSignature: [''],
      emailSignature: [''],
      logoUrl: ['https://example.com/new_logo.png'],
    });
  }

  getAdminSettings() {
    const sub = this.settingsService.getAdminSettings().subscribe((res: AdminSettingsRespose) => {
      if (isValidApiResponse(res)) {
        this.editForm.patchValue(res.data);
      }
    });
    this.subscriptions.add(sub);
  }


  addEmail(arr: FormArray, value: string) {
    if (value.trim()) arr.push(this.fb.control(value.trim()));
  }
  removeEmail(arr: FormArray, i: number) { arr.removeAt(i); }


  // Color picker
  selectColour(event: Event) {
    this.currentPopColour = (event.target as HTMLInputElement).value;
    this.showColourHover = this.showColourHighlight = this.showEnabledButton = this.showHoveredButton = false;
    switch ((event.target as HTMLInputElement).id) {
      case 'colourHover': this.showColourHover = true; break;
      case 'colourHighlight': this.showColourHighlight = true; break;
      case 'colourEnabledButton': this.showEnabledButton = true; break;
      case 'colourHoveredButton': this.showHoveredButton = true; break;
    }
  }
  hideColourPopUp() {
    this.showColourHover = this.showColourHighlight = this.showEnabledButton = this.showHoveredButton = false;
  }
  changeColourHover(ev: any) { this.editForm.patchValue({ colourHover: ev.color.hex }); }
  changeColourHighlight(ev: any) { this.editForm.patchValue({ colourHighlight: ev.color.hex }); }
  changeColourEnabledButton(ev: any) { this.editForm.patchValue({ colourEnabledButton: ev.color.hex }); }
  changeColourHoveredButton(ev: any) { this.editForm.patchValue({ colourHoveredButton: ev.color.hex }); }

  // Image upload
  onFileChange(e: any) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => this.imageURL = reader.result!;
    reader.readAsDataURL(file);
  }

  // Modal
  closeModal() { (this.myModal.nativeElement as HTMLElement).classList.add('hidden'); }
  openModal() { (this.myModal.nativeElement as HTMLElement).classList.remove('hidden'); }

  textChanged(event: any) { /* handle quill text change if needed */ }

  savestep1() {
  if (this.editForm.valid) {
    const sub = this.settingsService.updateAdminSettings(this.editForm.value).subscribe(res => {
      if (isValidApiResponse(res)) {
        this.toastr.success(message.adminSettingsSuccessResponse);
      }
    });
    this.subscriptions.add(sub);
  }
}

  onButtonEnter(event:any){

  }

  onButtonOut(event:any){

  }

   openColourPicker(type: 'hover' | 'highlight' | 'enabled' | 'hovered') {
   this.visiblePicker = type;
  }

  closeColourPicker() {
    this.visiblePicker = null;
  }

  updateColour(event: any, controlName: string) {
    const colour = event.color?.hex;
    if (colour) {
      this.editForm.patchValue({ [controlName]: colour });
    }
  }
}
