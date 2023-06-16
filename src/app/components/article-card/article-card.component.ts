import { Component, OnInit, Input } from '@angular/core';
import News from '../../../assets/data/news.json';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit{
  @Input() title:string = News.title
  @Input() summary:string = News.description
  @Input() topic:string = News.category[0]
  @Input() views:number = 2000
  @Input() publishedAt: string = News.pubDate
  @Input() imageUrl:string = News.image_url
  @Input() videoUrl:string = ''
  @Input() articleCardType:string = 'big-article'

  ngOnInit(): void {
      
  }
}
