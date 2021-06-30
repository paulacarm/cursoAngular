import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidserviceService {

  constructor(private http: HttpClient) { }
  api_url : string= 'https://www.covid19-api.com/country/all?format=json'
  api_key :string ='62512fb705msh96416d743a26131p16b0d1jsn94a25632a07d'
  host: string='covid-19-data.p.rapidapi.com'

  public getCountrys():Observable<any>{
    return this.http.get<any>(`${this.api_url}`);
  }




}
