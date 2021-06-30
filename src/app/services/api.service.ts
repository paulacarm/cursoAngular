import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../other/interfaces';
import { HttpClient} from '@angular/common/http'
/**Automaticamente se importa en app.module */
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  api_url : string= 'http://localhost:8080/auth'

  public login(loginUsuario:LoginUsuario):Observable<any>{
    return this.http.post<any>(`${this.api_url}/login`,loginUsuario);
  }

  //this.api_url+'login',loginUsuario
}
