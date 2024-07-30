import { TestBed } from '@angular/core/testing';

import { HttprequestsService } from './httprequests.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { Article } from './article';


describe('HttprequestsService', () => {
  let service: HttprequestsService;
  let httpTestingController: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttprequestsService]
    });
    service = TestBed.inject(HttprequestsService);
    httpTestingController = TestBed.inject(HttpTestingController);

  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getSources with the correct URL', () => {
    const testCategory = 'business';

    const mockArticles: { articles: Article[] } = {
      articles: [
        {
          title: "Increase in workers who can't afford a holiday",
          description: "There has been an increase in the number of workers in Ireland who cannot afford a week's holiday away from home, either in their own country or abroad, according to new research.",
          content: "There has been an increase in the number of workers in Ireland who cannot afford a week's holiday away from home, either in their own country or abroad, according to new research.\nAnalysis of EU data for the European Trade Union Confederation (ETUC) ... [1945 chars]",
          url: "https://www.rte.ie/news/ireland/2024/0730/1462459-irish-workers-holiday/",
          image: "https://img.rasset.ie/0014bdb9-1600.jpg",
          publishedAt: "2024-07-29T23:00:00Z",
          source: {
            name: "RTÉ News",
            url: "https://www.rte.ie"
          }
        }
      ]
  };



    const expectedUrl = `${environment.url}${environment.API}&lang=en&topic=${testCategory}`;

    service.getSources(testCategory).subscribe((response) => {
      expect(response.articles.length).toBe(1);
      expect(response.articles[0].title).toBe('Increase in workers who can\'t afford a holiday');
    });

    const req = httpTestingController.expectOne(expectedUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockArticles);
  });


});
