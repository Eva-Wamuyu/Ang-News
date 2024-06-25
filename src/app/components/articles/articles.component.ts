import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttprequestsService } from 'src/app/models_and_services/httprequests.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(private route: ActivatedRoute,private httpreq:HttprequestsService) { }

  title = ""
  source!:any;
  articles: any = [];
  loading: boolean = true;
  error: string = "";
  ngOnInit(): void {
  
    this.source = this.route.snapshot.paramMap.get('source')
    this.title = this.source;
    this.getArticles();
   
  }

  getArticles = ()=> {
    
    this.httpreq.getSources(this.source).pipe(
      tap((data) => {
        this.articles = data;
        this.loading = false;
      }),
      catchError((err) => {
        this.error = err?.error?.errors[0];
        this.loading = false;
        return of([]);  
      })
    ).subscribe();
   

}


}
