import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfounfComponent } from './notfounf.component';

describe('NotfounfComponent', () => {
  let component: NotfounfComponent;
  let fixture: ComponentFixture<NotfounfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotfounfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotfounfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
