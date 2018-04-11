import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CribCardComponent } from './crib-card.component';

describe('CribCardComponent', () => {
  let component: CribCardComponent;
  let fixture: ComponentFixture<CribCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CribCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CribCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
