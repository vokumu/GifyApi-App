import { Component, OnInit,OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';


@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {
  gifs:any[]=[];
  //subscription:Subscription;
  //subscription:Subscription;
  subscription!: Subscription;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getTrendingGifs();
    this.dataService.getGifs()
    .subscribe((response:any)=>{
      this.gifs=response;
    });
  }
  ngOnDestroy():void{
    this.subscription.unsubscribe();

  }


}
 