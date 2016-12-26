import {Component, Inject} from '@angular/core';
// import {HotelsService} from "./hotels.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: HotelsService
})


export class AppComponent {

  public currentHotel: Hotel;

  public hotels;

  public constructor(@Inject('hotelsService') private _hotelsService) {
    this.hotels = _hotelsService.getHotels();
    this.currentHotel = this.hotels[0]
  }

  public chooseHotel(hotel) {
    this.currentHotel = hotel;

  }

}
