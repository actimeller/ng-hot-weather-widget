import { Component, OnInit, Input } from '@angular/core';
import {HotelsService} from "../services/hotels.service";
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
  providers: [HotelsService]

})
export class SocialComponent implements OnInit {

  public currentHotel: Hotel;
  public checkChangeHotel: Subscription;

  public constructor(private _hotelsService: HotelsService) {
    this.currentHotel = _hotelsService.currentHotel;
    this.checkChangeHotel = _hotelsService.setCurrentHotel.subscribe((value) => {
      this.currentHotel = value;
    })
  }
  // @Input() public currentHotel;


  ngOnInit() {
  }

}
