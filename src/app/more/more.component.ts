import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {
  services:any=[];
  constructor(private _BookService:BookService,private _ActivatedRoute:ActivatedRoute,
  private _Router:Router) { }

  ngOnInit(): void {
    this._BookService.getServices('services').subscribe((response)=>{
      this.services=response.data;
    });
  }

}
