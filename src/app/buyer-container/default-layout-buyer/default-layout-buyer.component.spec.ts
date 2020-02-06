import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLayoutBuyerComponent } from './default-layout-buyer.component';

describe('DefaultLayoutBuyerComponent', () => {
  let component: DefaultLayoutBuyerComponent;
  let fixture: ComponentFixture<DefaultLayoutBuyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultLayoutBuyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultLayoutBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
