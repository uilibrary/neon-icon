import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoLayoutComponent } from './demo-layout.component';

describe('DemoLayoutComponent', () => {
  let component: DemoLayoutComponent;
  let fixture: ComponentFixture<DemoLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
