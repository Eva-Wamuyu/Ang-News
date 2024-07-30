import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { CategoriesComponent } from './categories.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

describe('CategoriesComponent', () => {
  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesComponent, NavBarComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize title to "Categories"', () => {
    expect(component.title).toBe('Categories');
  });

  it('should have a list of categories', () => {
    expect(component.categories.length).toBeGreaterThan(0);
    expect(component.categories[0]).toEqual(jasmine.objectContaining({
      path: jasmine.any(String),
      label: jasmine.any(String),
      icon: jasmine.any(String)
    }));
  });

  it('should display the title in the nav bar', () => {
    const navBarComponent = fixture.debugElement.query(By.css('app-nav-bar'));
    expect(navBarComponent.attributes['ng-reflect-title']).toBe(component.title);
  });

  it('should render category elements', () => {
    const categoryElements = fixture.debugElement.queryAll(By.css('.category-link'));
    expect(categoryElements.length).toBe(component.categories.length);

    const firstCategory = component.categories[0];
    const firstCategoryElement = categoryElements[0];
    const imgElement = firstCategoryElement.query(By.css('img'));
    const overlayTextElement = firstCategoryElement.query(By.css('.overlay-text'));

    expect(imgElement.attributes['src']).toBe(firstCategory.icon);
    expect(imgElement.attributes['alt']).toBe('Category Image');
    expect(overlayTextElement.nativeElement.textContent.trim()).toBe(firstCategory.label);
  });

  it('should have correct router links for categories', () => {
    const categoryLinks = fixture.debugElement.queryAll(By.css('a.category-link'));
    categoryLinks.forEach((link, index) => {
      expect(link.attributes['ng-reflect-router-link']).toBe(`/articles,${component.categories[index].path}`);
    });
  });
});
