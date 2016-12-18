import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  public hotels: Hotel[] = [
    {
      name: 'Four Seasons Hotel Moscow',
      address: 'Mezhdunarodnoye shosse 28B bld. 5, Moscow',
      desc: 'Hotel Metropol Moscow is 5 star Luxury Hotel in Moscow near Bolshoi Theatre, Red Square and Kremlin with 394 luxuriously appointed guest rooms and suites.',
      tel: '8 (499) 277-71-00',
      temperature: 15,
      water: 18,
      image1: './assets/images/hotels/moscow-1.jpg',
      image2: './assets/images/hotels/moscow-2.jpg',
      cloudiness: 0,
      followers: 135,
      following: 692
    },
    {
      name: 'La Reserve Paris',
      address: '31 Avenue George V, 75008 Paris',
      desc: 'Our luxury 5-star Shangri-La Hotel, Paris provides comfortably appointed rooms, suites and restaurants as well as excellent amenities.',
      tel: '+33 1 53 43 43 00',
      temperature: 28,
      water: 23,
      image1: './assets/images/hotels/paris-1.jpg',
      image2: './assets/images/hotels/paris-2.jpg',
      cloudiness: 1,
      followers: 993,
      following: 736
    },
    {
      name: 'The Ritz London',
      address: '336-337 Strand, London WC2R 1HA',
      desc: 'This charming 4-star boutique hotel is an ideal option for business and leisure stays in the heart of London, only a few minutes from Hyde Park.',
      tel: '+44 808 234 1953',
      temperature: 23,
      water: 0,
      image1: './assets/images/hotels/london-1.jpg',
      image2: './assets/images/hotels/london-2.jpg',
      cloudiness: 2,
      followers: 1842,
      following: 2500
    },
  ];

  public currentHotel: Hotel;

  public constructor() {
    this.currentHotel = this.hotels[0]
  }

  public chooseHotel(hotel) {
    this.currentHotel = hotel;

  }

}
