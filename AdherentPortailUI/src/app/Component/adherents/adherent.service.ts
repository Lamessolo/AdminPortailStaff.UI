import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Adherent } from 'src/app/Model/adherent';
@Injectable({
  providedIn: 'root'
})
export class AdherentService {

  private baseApiUrl ="https://localhost:5001/api/Adherents";
  constructor(private httpClient : HttpClient) { }

  getAdherents():Observable<Adherent[]>{
  return  this.httpClient.get<Adherent[]>(this.baseApiUrl);
  }
}
