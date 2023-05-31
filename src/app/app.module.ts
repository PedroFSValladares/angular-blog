import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticleComponent } from './pages/article/article.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { SectionComponent } from './components/section/section.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { MediumCardComponent } from './components/medium-card/medium-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { AudioCardComponent } from './components/audio-card/audio-card.component';
import { ArticleContentComponent } from './components/article-content/article-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticleComponent,
    MenuBarComponent,
    SectionComponent,
    BigCardComponent,
    MediumCardComponent,
    SmallCardComponent,
    AudioCardComponent,
    ArticleContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
