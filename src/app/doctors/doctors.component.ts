import { Component, OnInit } from '@angular/core';
import { VetService } from '../vet.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  doctors:any []=[];
  constructor(private _VetService:VetService,private _ActivatedRoute:ActivatedRoute,
    private _Router:Router) { }

  ngOnInit(): void {
    this._VetService.getDoctors('doctors').subscribe((response)=>{
      this.doctors=response.doctors;
          })
  }

}
