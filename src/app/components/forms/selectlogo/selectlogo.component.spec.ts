import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectlogoComponent } from './selectlogo.component';

describe('SelectlogoComponent', () => {
  let component: SelectlogoComponent;
  let fixture: ComponentFixture<SelectlogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectlogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectlogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
