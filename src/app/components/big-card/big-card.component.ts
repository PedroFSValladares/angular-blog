import { Component, OnInit } from '@angular/core';
import News from '../../../assets/data/news.json';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit{
  title:string = News.title
  summary:string = this.buildSummary()
  topic:string = News.topic
  views:number = 2000
  publishedAt: string = News.publishDate ;
  imageUrl:string = News.imageUrl

  ngOnInit(): void {
      
  }
  buildSummary():string{
    let fullText = News.text[0].text.split(' ')
    return fullText.slice(0, 30).join(' ').concat('...')
  }

}
