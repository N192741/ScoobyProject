import { Component, OnInit } from '@angular/core';
import { VetService } from '../vet.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-learn-more-adoption',
  templateUrl: './learn-more-adoption.component.html',
  styleUrls: ['./learn-more-adoption.component.css']
})
export class LearnMoreAdoptionComponent implements OnInit {
  offers:any []=[];

  constructor(private _VetService:VetService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this._VetService.getOffers('offers').subscribe((response)=>{
      this.offers=response.data;
    })
  }

}
