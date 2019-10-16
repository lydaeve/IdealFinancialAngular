import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidthdrawFormComponent } from './widthdraw-form.component';

describe('WidthdrawFormComponent', () => {
  let component: WidthdrawFormComponent;
  let fixture: ComponentFixture<WidthdrawFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidthdrawFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidthdrawFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
