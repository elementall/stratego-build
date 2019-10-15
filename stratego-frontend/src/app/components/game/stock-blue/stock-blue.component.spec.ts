import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockBlueComponent } from './stock-blue.component';

describe('StockBlueComponent', () => {
  let component: StockBlueComponent;
  let fixture: ComponentFixture<StockBlueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockBlueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
