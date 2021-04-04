import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearshEventComponent } from './searsh-event.component';

describe('SearshEventComponent', () => {
  let component: SearshEventComponent;
  let fixture: ComponentFixture<SearshEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearshEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearshEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
