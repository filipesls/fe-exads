import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaNoDataComponent } from './exa-no-data.component';

describe('ExaNoDataComponent', () => {
  let component: ExaNoDataComponent;
  let fixture: ComponentFixture<ExaNoDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExaNoDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaNoDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
