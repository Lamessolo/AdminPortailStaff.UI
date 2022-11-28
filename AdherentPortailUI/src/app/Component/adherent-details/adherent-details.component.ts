import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Gender } from 'src/app/Model//ui-models/gender';
import { Adherent } from 'src/app/Model/ui-models/adherent';
import { GenderService } from 'src/app/Services/gender.service';
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

 genderList : Gender[] = [];
  constructor(private readonly adherentService : AdherentService,
              private readonly genderService : GenderService,
               private readonly route : ActivatedRoute,
               private readonly snackbar : MatSnackBar) { }

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

      this.genderService.getGenders().subscribe(
        (successResponse)=>{
            this.genderList = successResponse;
         }
      );
    }
    
  }


  onUpdate():void{
    console.log(this.adherent)
 // Call adherentService to update adherent
   this.adherentService.updateAdherent(this.adherent.id,this.adherent).subscribe(
    (sucessResponse)=> {
      //Show a notification

    }, (errorResponse)=>{
      // Log it
    }
   )
  }

}
