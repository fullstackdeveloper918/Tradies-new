import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { AdminSettings } from '../../core/services/admin-settings';

@Directive({
  selector: '[appAdminButtonStyleDirective]',
  standalone : false
})
export class AdminButtonStyleDirective {

  @Input('defaultColor') defaultColor: string = '';

  constructor(private el: ElementRef, private adminSettingsService: AdminSettings) {}

  ngOnInit(): void {
    const initialColor = this.adminSettingsService.enabledButtonColour || this.defaultColor;
    this.el.nativeElement.style.backgroundColor = initialColor;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBackgroundColor(this.adminSettingsService.hoveredButtonColour);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBackgroundColor(this.adminSettingsService.enabledButtonColour || this.defaultColor);
  }

  private setBackgroundColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
