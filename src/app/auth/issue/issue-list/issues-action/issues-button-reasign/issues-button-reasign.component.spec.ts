import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesButtonReasignComponent } from './issues-button-reasign.component';

describe('IssuesButtonReasignComponent', () => {
  let component: IssuesButtonReasignComponent;
  let fixture: ComponentFixture<IssuesButtonReasignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuesButtonReasignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesButtonReasignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
