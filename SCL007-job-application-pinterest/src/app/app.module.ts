import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { PhonoService } from '../app/service/phono.service';
import { InfiniteScrollModule} from 'ngx-infinite-scroll'
import { AppComponent } from './app.component';
import { ScrollableDirective } from './scrollable.directive';

@NgModule({
  declarations: [
    AppComponent,
    ScrollableDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [PhonoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
