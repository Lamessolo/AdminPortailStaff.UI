import { Adresse } from "./adresse";
import { Gender } from "./gender";

export interface Adherent{
    id : string,
    firstName: string;
    lastName:string;
    mobile: number,
    email: string,
    profileImageUrl:string,
    dateOfBirth:string,
    genderId:string,
    gender:Gender,
    adresse : Adresse
}