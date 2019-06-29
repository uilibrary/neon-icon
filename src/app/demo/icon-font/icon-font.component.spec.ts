import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconFontComponent } from './icon-font.component';

describe('IconFontComponent', () => {
  let component: IconFontComponent;
  let fixture: ComponentFixture<IconFontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconFontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconFontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
