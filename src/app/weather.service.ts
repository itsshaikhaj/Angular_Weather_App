import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class WeatherService {

  private APP_ID : string = 'YOUR_APP_ID_HERE';
  constructor(private http: HttpClient) { }

  getWeatherForCity(city: string): Observable<any> {
    const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${this.APP_ID}`;
    return this.http.get<any>(path).pipe(
      map(data => ({
        ...data,
        image: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      })),
    );
  }
}
