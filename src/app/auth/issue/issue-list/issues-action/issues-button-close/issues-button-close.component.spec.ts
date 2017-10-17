import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesButtonCloseComponent } from './issues-button-close.component';

describe('IssuesButtonCloseComponent', () => {
  let component: IssuesButtonCloseComponent;
  let fixture: ComponentFixture<IssuesButtonCloseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuesButtonCloseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesButtonCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
