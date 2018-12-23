import { Component, OnInit } from '@angular/core';
import {WeatherService} from './../services/weather.service';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.css']
})
export class CityWeatherComponent implements OnInit {
  cityName; today; jstoday; weatherData; temp; forcast; weathr;
  dayOfWeek = []; timestamp;
   days = ['Monday', 'Tuesday', 'Wednesday','Thursday','Friday', 'Saturday','Sunday'];
    date; min; max; tabWeather = []; weather = [];
  myDate: any;
  constructor(public WeatherService:WeatherService) { }

  ngOnInit() {
    this.cityName = 'Tunis';
    this.searchCity(this.cityName);
    this.getForcast(this.cityName);
    this.today = new Date();
    this.jstoday = '';
    this.jstoday = formatDate(this.today, 'hh:mm:ss a', 'en-TN');
    console.log(this.jstoday);
  }
  public searchCity(cityName) {
    this.WeatherService.searchCity(this.cityName).subscribe(res => {
      this.weatherData = res.json();
      console.log(this.weatherData);
      this.temp = Math.floor((this.weatherData.main.temp) - 273.15);
      this.min = Math.floor((this.weatherData.main.temp_min) - 273.15);
      this.max = Math.floor((this.weatherData.main.temp_max) - 273.15);
      for (var i = 0; i < this.weatherData.weather.length; i++) {
        this.weathr = this.weatherData.weather[i];

      }

    })

  }
  public getForcast(cityName) {
    this.WeatherService.getForcast(this.cityName).subscribe(result => {
      this.forcast = result.json().list;
      console.log(this.forcast);

      for (var i = 0; i < this.forcast.length; i++) {
        this.timestamp = this.forcast[i].dt;
        this.date = new Date(this.timestamp * 1000);
        console.log(this.date.getDay());
        this.dayOfWeek[this.date.getDay()] = this.days[this.date.getDay()];
        this.tabWeather[i] = this.forcast[i].weather;


        console.log(this.dayOfWeek);
      }
    })
  }
  public convertDate(myDate) {
    this.today = this.myDate;
    this.jstoday = '';
    this.jstoday = formatDate(this.today, 'hh:mm:ss a', 'en-US');
    return this.jstoday;

  }
}
