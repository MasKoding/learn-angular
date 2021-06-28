import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoutFoundComponentComponent } from './page-nout-found-component.component';

describe('PageNoutFoundComponentComponent', () => {
  let component: PageNoutFoundComponentComponent;
  let fixture: ComponentFixture<PageNoutFoundComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNoutFoundComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNoutFoundComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
