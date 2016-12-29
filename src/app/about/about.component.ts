import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {HotelsService} from "../services/hotels.service";
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [HotelsService]

})
export class AboutComponent implements OnInit {
  public checkChangeHotel: Subscription;

  public constructor(private _hotelsService: HotelsService) {
    this.hotels = _hotelsService.getHotels();
    this.currentHotel = _hotelsService.currentHotel;
    this.checkChangeHotel = _hotelsService.setCurrentHotel.subscribe((value) => {
      this.currentHotel = value;
    })
  }

  public hotels: Hotel[];
  public currentHotel: Hotel;


  public chooseHotel(hotel: Hotel): void {
    this._hotelsService.changeHotel(hotel);
  }


  // входящие данные
  // @Input() public hotels;
  // @Input() public currentHotel;

  // выходящие данные
  // @Output() public choseCurrentHotel: EventEmitter<{index: number}> = new EventEmitter()

  ngOnInit() {
  }

  public getUrl(url: string) {
    return `url('${url}')`
  }

  //todo: почему просто (index:number) - ошибка?
  // public chooseHotel(index: {index: number}) {
  //
  //   this.choseCurrentHotel.emit(index)
  //   return index
  // }


}


