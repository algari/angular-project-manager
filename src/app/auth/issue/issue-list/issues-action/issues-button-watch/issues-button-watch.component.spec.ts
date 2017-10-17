import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesButtonWatchComponent } from './issues-button-watch.component';

describe('IssuesButtonWatchComponent', () => {
  let component: IssuesButtonWatchComponent;
  let fixture: ComponentFixture<IssuesButtonWatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuesButtonWatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesButtonWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
