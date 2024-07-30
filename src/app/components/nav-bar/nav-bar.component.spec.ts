import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';


describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarComponent ],
      imports: [RouterTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title and title should be in uppercase', () => {
    component.title = 'Test Title';
    fixture.detectChanges();

    const titleElement = de.query(By.css('p')).nativeElement;
    expect(titleElement.textContent).not.toBe('test title');
    expect(titleElement.textContent).toBe('TEST TITLE');
  });

  it('should have a link to /categories', () => {

    const linkDebugElement = fixture.debugElement.query(
      By.directive(RouterLinkWithHref)
    );

    const routerLinkInstance = linkDebugElement.injector.get(RouterLinkWithHref);
    expect(routerLinkInstance['commands']).toEqual(['/categories']);
  });

});
