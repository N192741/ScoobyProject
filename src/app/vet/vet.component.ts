import { Component, OnInit } from '@angular/core';
import { VetService } from '../vet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../home.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vet',
  templateUrl: './vet.component.html',
  styleUrls: ['./vet.component.css']
})
export class VetComponent implements OnInit {
doctors:any []=[];
vets:any []=[];
  constructor(private _VetService:VetService,private _Router:Router,private _tostar:ToastrService
   , private _ActivatedRoute:ActivatedRoute,private _HomeService:HomeService
  ) { }
  bookForm:FormGroup= new FormGroup({
    time:new FormControl(null),
    date:new FormControl(null),
    serviceType:new FormControl(null),
  });
  submitbook(formInfo:FormGroup ){
    this._HomeService.BookService(formInfo.value).subscribe((response)=>{

      if(response.status == 'success'){
        this._tostar.success('Book done');
        console.log('book done');
   } });

    }

  ngOnInit(): void {
    this._VetService.getDoctors('doctors').subscribe((response)=>{
      this.doctors=response.doctors;
          })
          this._VetService.getVets('vets').subscribe((response)=>{
            this.vets=response.data;
                })
  }

}
