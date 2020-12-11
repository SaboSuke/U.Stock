import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastProductComponent } from './last-product.component';

describe('LastProductComponent', () => {
  let component: LastProductComponent;
  let fixture: ComponentFixture<LastProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
