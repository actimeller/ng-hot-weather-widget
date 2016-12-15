import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  //todo типизировать cities
  public cities = [
    {
      name: 'Moscow',
      temperature: 10,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Panorama_of_Moscow_Kremlin.jpg/800px-Panorama_of_Moscow_Kremlin.jpg'
    },
    {
      name: 'Paris',
      temperature: 17,
      imageUrl: 'http://richeycommunityorchestra.com/wp-content/uploads/2014/09/eiffel-tower-sunrise.jpg'
    },
    {
      name: 'London',
      temperature: 23,
      imageUrl: 'http://littleatoms.com/sites/default/files/styles/imagedetail/public/post/image/london.png'
    },
  ];


  public constructor() {
    this.currentCity = this.cities[0]
  }

  public currentCity: any;

  public chooseCity(city) {
    this.currentCity = city;
  }


  // public chose
}
