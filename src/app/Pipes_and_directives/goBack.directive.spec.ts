import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { GoBackDirective } from './goBack.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `<button goBack></button>`
})
class TestComponent { }

describe('GoBackDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoBackDirective, TestComponent],
      providers: [Location]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    location = TestBed.inject(Location);
  });

  it('should call location.back() on click', () => {
    spyOn(location, 'back');

    fixture.detectChanges();
    const button = fixture.debugElement.query(By.directive(GoBackDirective)).nativeElement;
    button.click();

    expect(location.back).toHaveBeenCalled();
  });
});
