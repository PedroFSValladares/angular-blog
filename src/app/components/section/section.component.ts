import { Component, Input, OnInit } from '@angular/core';
import news from '../../../assets/data/news.json'
import { NewsApiService } from 'src/app/services/news-api.service';
import { News, Source } from 'src/app/models/apiTypes';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit{
  @Input() title:string = ''
  @Input() articleType:string = ''
  @Input() topic:string = ''
  @Input() news:News[] = []
  @Input() middleSection:boolean = false
  sources:Source[] = []
  
  constructor(private newsApi:NewsApiService){}
  
  ngOnInit(): void {
    /*
    let sourceParam:string = ''
    this.newsApi.getSources().subscribe({
      next: (response) => {
        sourceParam = response.sources.filter((source) => source.id !== 'google-news-br').map((source) => source.id).join()
        console.log(sourceParam)
        this.newsApi.getFromSources(sourceParam).subscribe({
            next: (response => {
              this.news = response.articles
              console.log(response)
            })
        })  
      },
      error: (err) => console.log(err)    
    })
    */
   
  }
}
