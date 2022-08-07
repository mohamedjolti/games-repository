import { Component, OnInit } from '@angular/core';
import { GamesPageService } from './services/games-page.service';

@Component({
  selector: 'games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.css']
})
export class GamesPageComponent implements OnInit {
  public selectedCategory:string = "slots";
  constructor(public gemesService:GamesPageService) {
    this.gemesService.getGamesAndSetCategoris();
   }

  ngOnInit(): void {
  }
  changeCategory(category:any){
     this.selectedCategory=category;
  }

}
