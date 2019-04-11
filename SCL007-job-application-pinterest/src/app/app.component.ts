import { Component} from '@angular/core';
import { PhonoService } from '../app/service/phono.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  phonos: any[] =[];
  
 
  constructor(protected PhonoService: PhonoService) {
  }

  ngOnInit() {
    this.PhonoService.getPhonos()
    .subscribe(
      (data) => { // Success
        this.phonos = data['hits'];
      },
      (error) => {
        console.error(error);
      }
    );
  }
  scrollHandler(e){
    console.log(e);
  }
}
