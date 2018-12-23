import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(public http: Http) { }

  searchCity(cityName: string) {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=dbc0566566bdaf453cb158fbda5735ea');

  }
  getForcast(cityName: string) {
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + cityName + '&units=metric&cnt=7&lang=en&appid=c0c4a4b4047b97ebc5948ac9c48c0559');
  }

}
