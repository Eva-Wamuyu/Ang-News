import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  ngOnInit(): void {
  
    this.source = this.route.snapshot.paramMap.get('source')
    this.title = this.source;
    this.getArticles();
   
  }

  getArticles = ()=> {
    
    this.httpreq.getSources(this.source).subscribe(
      (data)=>{
       this.articles = data;
       console.log(this.articles)
       return this.articles;
      }
    ),(err:any) =>{
      console.log(err);
    }
   

}


}
