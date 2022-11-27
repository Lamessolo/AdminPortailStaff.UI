import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Adherent } from 'src/app/Model/ui-models/adherent';
import { AdherentService } from '../adherents/adherent.service';

@Component({
  selector: 'app-adherent-details',
  templateUrl: './adherent-details.component.html',
  styleUrls: ['./adherent-details.component.css']
})
export class AdherentDetailsComponent implements OnInit {
 adherentId : string | null | undefined;
 adherent : Adherent = {
   id: '',
   firstName: '',
   lastName: '',
   mobile: 0,
   email: '',
   profileImageUrl: '',
   dateOfBirth: '',
   genderId: '',
   gender: {
    id :'',
    description: ''
   },
   adresse:{
    id : '',
    physicalAdresse:'',
    postalAdresse: ''
   }
 }
  constructor(private readonly adherentService : AdherentService,
               private readonly route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params)=> {
        this.adherentId = params.get("id");}
    )
    if(this.adherentId){
      this.adherentService.getAdherent(this.adherentId).subscribe(
        (successResponse)=>{
         this.adherent = successResponse;
        }
      );
    }
    
  }

}
