import { AfterViewInit, Component } from '@angular/core';

declare const google: any;

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss'],
})
export class PromotionsComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const mapOptions = {
      center: { lat: 19.1751989, lng: -99.4776625 },
      zoom: 15,
    };

    const mapElement = document.getElementById('map');
    const map = new google.maps.Map(mapElement, mapOptions);

    // Create a marker
    const marker = new google.maps.Marker({
      position: { lat: 19.1751989, lng: -99.4776625 },
      map: map,
      label: {
        text: 'J&C',
        color: '#FFFFFF', // Label text color
        fontWeight: 'bold', // Label text font weight
      },
    });
  }
}
