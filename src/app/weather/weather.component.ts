import { Component, OnInit, Input } from '@angular/core';
import {HotelsService} from "../services/hotels.service";
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  providers: [HotelsService]
})
export class WeatherComponent implements OnInit {

  public currentHotel: Hotel;
  public checkChangeHotel: Subscription;

  public constructor(private _hotelsService: HotelsService) {
    this.currentHotel = _hotelsService.currentHotel;
    this.checkChangeHotel = _hotelsService.setCurrentHotel.subscribe((value) => {
      console.info('about');
      this.currentHotel = value;
    })
  }

  // входящие данные
  // @Input() public currentHotel;

  ngOnInit() {
  }

}
