import { Component } from '@angular/core';
import { HomeService } from "src/_service/home.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  data: any = [];

  constructor(private _HomeService: HomeService) {}

  ngOnInit(): void {
      this.getData();  
  }

  getData() {
    this._HomeService
    .getData().subscribe((res: any) => {
      let resObj = JSON.parse(res);
      if (resObj.success) {
        this.data = resObj.data.scorecard;
        console.log('daata??', JSON.parse(res).data);
      }
    }, (error) => {
      console.log('error>>' ,error);
    });
  }

}
