import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PhonoService {
 
  constructor(protected http: HttpClient ) { }

  getPhonos() {
    return this.http.get('https://pixabay.com/api/?key=12107649-b8efeeda5955afcc5c4d108a8&hits&category=travel&orientation=vertical&per_page=20');
  }
}
