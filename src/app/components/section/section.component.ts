import { Component, Input, OnInit } from '@angular/core';
import news from '../../../assets/data/news.json'
import { NewsApiService } from 'src/app/services/news-api.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit{
  @Input() topic:string = 'general'
  title:string = ''
  news:any = [
    {new: news, display: 'medium'},
    {new: news, display: 'medium'},
  ]

  constructor(private newsApi:NewsApiService){}
  
  ngOnInit(): void {
    /*
    */
   this.newsApi.getTopHeadLinesByCategory(this.topic).subscribe({
     next: (response) => console.log(response),
     error: (err) => console.log(err)
   })
    this.newsApi.getSources(this.topic).subscribe({
      next: (response) => console.log(response),
      error: (err) => console.log(err)
    })
  }
}
