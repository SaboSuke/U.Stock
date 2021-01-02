import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowOnStockComponent } from './low-on-stock.component';

describe('LowOnStockComponent', () => {
  let component: LowOnStockComponent;
  let fixture: ComponentFixture<LowOnStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LowOnStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LowOnStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
