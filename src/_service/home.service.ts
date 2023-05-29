import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(environment.url,  {responseType: 'text'});
  }
}
