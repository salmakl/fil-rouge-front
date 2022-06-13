import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingDesignComponent } from './existing-design.component';

describe('ExistingDesignComponent', () => {
  let component: ExistingDesignComponent;
  let fixture: ComponentFixture<ExistingDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistingDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
