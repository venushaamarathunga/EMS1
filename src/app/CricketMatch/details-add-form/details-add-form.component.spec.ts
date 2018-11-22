import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAddFormComponent } from './details-add-form.component';

describe('DetailsAddFormComponent', () => {
  let component: DetailsAddFormComponent;
  let fixture: ComponentFixture<DetailsAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
