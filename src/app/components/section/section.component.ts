import { Component, Input, OnInit } from '@angular/core';
import news from '../../../assets/data/news.json'
import { NewsApiService } from 'src/app/services/news-api.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit{
  title:string = ''
  news:any = [
    {new: news, display: 'medium'},
    {new: news, display: 'medium'},
  ]

  constructor(private newsApi:NewsApiService){}
  
  ngOnInit(): void {
    /*
    */
  }
}
