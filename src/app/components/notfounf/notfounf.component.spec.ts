import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { NotfounfComponent } from '../notfounf/notfounf.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

describe('NotfounfComponent', () => {
  let component: NotfounfComponent;
  let fixture: ComponentFixture<NotfounfComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotfounfComponent, NavBarComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotfounfComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize title to "404 Not Found"', () => {
    expect(component.title).toBe('404 Not Found');
  });

  it('should display the title in the nav bar', () => {
    const navBarComponent = de.query(By.css('app-nav-bar'));
    expect(navBarComponent.attributes['ng-reflect-title']).toBe(component.title);
  });

  it('should display "Uh-Oh!" text', () => {
    const h2Element = de.query(By.css('h2[data-test-id="not-found-h2"]'));
    expect(h2Element.nativeElement.textContent).toContain('Uh-Oh!');
  });

  it('should display "Page Not Found, Sorry" text', () => {
    const pElement = de.query(By.css('p[data-test-id="not-found-p"]'));
    expect(pElement.nativeElement.textContent).toContain('Page Not Found,Sorry');
  });

  it('should have the correct classes applied to the container elements', () => {
    const containerElement = de.query(By.css('.container.text-center'));
    expect(containerElement).not.toBeNull();

    const hScreenElement = de.query(By.css('.h-screen.flex.flex-col.items-center.justify-center'));
    expect(hScreenElement).not.toBeNull();

    const mt96Element = de.query(By.css('.-mt-96'));
    expect(mt96Element).not.toBeNull();
  });

  it('should have the correct classes applied to the text elements', () => {
    const h2Element = de.query(By.css('h2[data-test-id="not-found-h2"]'));
    expect(h2Element.classes['text']).toBeTrue();
    expect(h2Element.classes['font-bold']).toBeTrue();
    expect(h2Element.classes['text-gray-800']).toBeTrue();

    const pElement = de.query(By.css('p[data-test-id="not-found-p"]'));
    expect(pElement.classes['text-gray-500']).toBeTrue();
  });
});
