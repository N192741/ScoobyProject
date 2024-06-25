import { Component, OnInit } from '@angular/core';
import { VetService } from '../vet.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-see-more',
  templateUrl: './see-more.component.html',
  styleUrls: ['./see-more.component.css']
})
export class SeeMoreComponent implements OnInit {
  SuccessfullAdoptions:any []=[];
  constructor(private _VetService:VetService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this._VetService.getSuccessfullAdoption('SuccessfullAdoption').subscribe((response)=>{
      this.SuccessfullAdoptions=response.data;
  });

}}
