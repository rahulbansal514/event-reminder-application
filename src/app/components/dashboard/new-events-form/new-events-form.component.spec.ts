import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEventsFormComponent } from './new-events-form.component';

describe('NewEventsFormComponent', () => {
  let component: NewEventsFormComponent;
  let fixture: ComponentFixture<NewEventsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEventsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEventsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
