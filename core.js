import { Injectable } from '@angular/core';
import { Http, Response, } from '@angular/http';
import { Observable } from 'rxjs/Rx';



@Injectable()
export class RestService {
    API_URL: string = 'https://cors-anywhere.herokuapp.com/https://dooball2you.com';

  constructor(private http: Http) { }

  public getRandomArticle() : Observable<any> {
        return this.http.get(`${this.API_URL}Special:Random`)
        .map((res: Response) => res.json())
        .catch((err: any) => Observable.throw(err || 'server error'));
  }

}
