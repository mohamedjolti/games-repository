import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Game } from '../models/game.model';
import { concatMap } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class GamesPageService {
  public categories: string[] = [];
  public games: any=[];
  constructor(private httpClient: HttpClient) { }

  getGamesFromApi(): Observable<Game[]> {
    return this.httpClient.get<Game[]>(environment.apiUrl);
  }

  getGamesAndSetCategoris(): any {
    this.getGamesFromApi().subscribe((games: any) => {
      this.games = games.map((game:Game)=>{
         game.image="http:"+game.image;
         return game;
      });
      from(games).pipe(
        concatMap((game: any) => {
          return game.categories.
            map((cateogry: any) => cateogry)
        }))
        .subscribe((cateogryString: any) => {
          if (!this.categories.includes(cateogryString)) {
            this.categories.push(cateogryString)
          }
        })
    }
    )

  }


}
