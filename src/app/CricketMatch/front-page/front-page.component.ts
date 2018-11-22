import { Component, OnInit } from '@angular/core';
import { RepositoryService } from './../../shared/services/repository.service';
import { CricketMatch } from './../../_interface/CricketMatch.model';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {
  
  public cricketmatchfrontpage: CricketMatch[];

  constructor(private repository: RepositoryService) { }

  ngOnInit() {
    this.getAllCricketMatch();
  }

  public getAllCricketMatch(){
    let apiAddress: string = "api/cricketmatch";
    this.repository.getData(apiAddress)
    .subscribe(res => {
      this.cricketmatchfrontpage = res as CricketMatch[];
    })
  }

}
