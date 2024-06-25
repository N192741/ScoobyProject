import { Component, OnInit } from '@angular/core';
import { VetService } from '../vet.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shelter-pets',
  templateUrl: './shelter-pets.component.html',
  styleUrls: ['./shelter-pets.component.css']
})
export class ShelterPetsComponent implements OnInit {
  Id:string='';
  shelterPets:any []=[];
  constructor(private _VetService:VetService,private route: ActivatedRoute,private router: Router) {
    this.route.paramMap.subscribe(params => {
      this.Id= params.get('Id');
  });
  }

  ngOnInit(): void {
    this._VetService.getpetsshelter(this.shelterPets,this.Id).subscribe((response)=>{
      this.shelterPets=response;});
  }

}
