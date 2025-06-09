import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrganisations } from './add-organisations';

describe('AddOrganisations', () => {
  let component: AddOrganisations;
  let fixture: ComponentFixture<AddOrganisations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddOrganisations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOrganisations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
