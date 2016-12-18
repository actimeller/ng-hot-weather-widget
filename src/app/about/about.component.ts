import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() {
  }

  // входящие данные
  @Input() public hotels;
  @Input() public currentHotel;

  // выходящие данные
  @Output() public choseCurrentHotel: EventEmitter<{index: number}> = new EventEmitter()

  ngOnInit() {

  }

  public getUrl(url: string) {
    return `url('${url}')`
  }

  //todo: почему просто (index:number) - ошибка?
  public chooseHotel(index: {index: number}) {

    this.choseCurrentHotel.emit(index)
    return index
  }


}
