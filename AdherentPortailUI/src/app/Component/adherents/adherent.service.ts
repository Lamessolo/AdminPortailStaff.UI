import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Adherent } from 'src/app/Model/adherent';
import { UpdateAdherent } from 'src/app/Model/ui-models/updateAdherent';
@Injectable({
  providedIn: 'root'
})
export class AdherentService {

  private baseApiUrl ="https://localhost:5001/api/Adherent";
  constructor(private httpClient : HttpClient) { }

  getAdherents():Observable<Adherent[]>{
  return  this.httpClient.get<Adherent[]>(this.baseApiUrl);
  }
  
  getAdherent(adherentId : string):Observable<Adherent>{
    return  this.httpClient.get<Adherent>(this.baseApiUrl + "/"+ adherentId);
    }

  updateAdherent(adherentId : string, adherentUpdate : Adherent):Observable<Adherent>{
    const updateAdherent : UpdateAdherent ={

      firstName : adherentUpdate.firstName,
      lastName : adherentUpdate.lastName,
      dateOfBirth : adherentUpdate.dateOfBirth,
      email : adherentUpdate.email,
      mobile : adherentUpdate.mobile,
      genderId : adherentUpdate.genderId,
      physicalAdresse : adherentUpdate.adresse.physicalAdresse,
      postalAdresse :adherentUpdate.adresse.postalAdresse

    }
    return this.httpClient.put<Adherent>(this.baseApiUrl+"/"+adherentId,updateAdherent);
  }
  

}
