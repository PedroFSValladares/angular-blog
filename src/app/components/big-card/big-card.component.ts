import { Component, OnInit } from '@angular/core';
import News from '../../../assets/data/news.json';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit{
  title:string = News.title
  summary:string = this.makeSummary()
  topic:string = News.topic
  views:number = 2000
  publishedAt!: Date;
  imageUrl:string = 'News.imageUrl'

  ngOnInit(): void {
      
  }
  makeSummary():string{
    let fullText = News.text[0].text.split(' ')
    return fullText.slice(0, 20).join(' ').concat('...')
  }
}
