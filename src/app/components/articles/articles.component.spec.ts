import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { ArticlesComponent } from './articles.component';
import { HttprequestsService } from '../../models_and_services/httprequests.service';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { LoaderComponent } from '../loader/loader.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NotfounfComponent} from '../notfounf/notfounf.component';
import { TruncatePipe } from '../../Pipes_and_directives/truncate.pipe';

describe('ArticlesComponent', () => {
  let component: ArticlesComponent;
  let fixture: ComponentFixture<ArticlesComponent>;
  let httpreqService: jasmine.SpyObj<HttprequestsService>;
  let router: jasmine.SpyObj<Router>;
  let activatedRoute: ActivatedRoute;
  let de: DebugElement;


  beforeEach(async () => {
    const httpreqSpy = jasmine.createSpyObj('HttprequestsService', ['getSources']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const activatedRouteStub = { snapshot: { paramMap: { get: (key: string) => '' } } };

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([
        { path: '**', component: NotfounfComponent }
      ])],

      declarations: [ArticlesComponent,LoaderComponent,NotfounfComponent,TruncatePipe],
      providers: [
        { provide: HttprequestsService, useValue: httpreqSpy },
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(ArticlesComponent);
    component = fixture.componentInstance;
    httpreqService = TestBed.inject(HttprequestsService) as jasmine.SpyObj<HttprequestsService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    activatedRoute = TestBed.inject(ActivatedRoute);
    de = fixture.debugElement;

  });

  it('should create',()=>{
    expect(component).toBeTruthy();
  });

  it('should have loading as true initially',()=>{
    expect(component.loading).toBeTruthy();
  });



  it('should not display loading component when loading is false', () => {
    httpreqService.getSources.and.returnValue(of({articles: []}));
    component.loading = false;
    fixture.detectChanges();
    const loaderElement = fixture.debugElement.query(By.directive(LoaderComponent));
    expect(loaderElement).toBeNull();
    const placeholderElements = fixture.debugElement.queryAll(By.css('.animate-pulse'));
    expect(placeholderElements.length).toBe(0);
  });


  it('should call getArticles when source is valid', () => {
    const testSource = 'testSource';
    const mockArticles = {
      articles: [
        {
          title: 'Increase in workers who can\'t afford a holiday',
          description: 'There has been an increase in the number of workers in Ireland who cannot afford a week\'s holiday away from home, either in their own country or abroad, according to new research.',
          content: 'There has been an increase in the number of workers in Ireland who cannot afford a week\'s holiday away from home, either in their own country or abroad, according to new research.\nAnalysis of EU data for the European Trade Union Confederation (ETUC) shows...',
          url: 'https://www.rte.ie/news/ireland/2024/0730/1462459-irish-workers-holiday/',
          image: 'https://img.rasset.ie/0014bdb9-1600.jpg',
          publishedAt: '2024-07-29T23:00:00Z',
          source: {
            name: 'RTÉ News',
            url: 'https://www.rte.ie'
          }
        }
      ]
    };

    activatedRoute.snapshot.paramMap.get = jasmine.createSpy().and.returnValue(testSource);
    httpreqService.getSources.and.returnValue(of(mockArticles));
    component.ngOnInit();
    fixture.detectChanges();
    expect(httpreqService.getSources).toHaveBeenCalledWith(testSource);
    expect(component.articles).toEqual(mockArticles.articles);
    expect(de.nativeElement.querySelectorAll('.article-container').length).toBeGreaterThanOrEqual(1);
    expect(component.loading).toBeFalse();
  });


  it('should handle getArticles Errors', () => {

    const errorResponse = { error: { errors: ['Error occurred'] } };
    httpreqService.getSources.and.returnValue(throwError(() => errorResponse));
    fixture.detectChanges();
    expect(component.error).toBe('Error occurred');
    expect(component.loading).toBeFalse();
  });



  it('should redirect to 404 if source is empty', async() => {
    //PENDING
    activatedRoute.snapshot.paramMap.get = jasmine.createSpy().and.returnValue('');
    await router.navigate(['/categories/']);

  });

  it('should show loaders when loading',()=>{

  })




});
