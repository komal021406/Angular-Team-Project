import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjTableComponent } from './proj-table.component';

describe('ProjTableComponent', () => {
  let component: ProjTableComponent;
  let fixture: ComponentFixture<ProjTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
