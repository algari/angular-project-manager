import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProjectComponent } from './detail-project.component';

describe('DetailProjectComponent', () => {
  let component: DetailProjectComponent;
  let fixture: ComponentFixture<DetailProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
