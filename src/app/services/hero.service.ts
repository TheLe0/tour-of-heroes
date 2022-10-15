import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from '../models/hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private readonly baseUrl: string = "http://localhost:3000/";
  private readonly endpoint: string = 'heroes/';

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = this.http.get<Hero[]>(this.baseUrl + this.endpoint);

    this.messageService.add('HeroService: fetched heroes');

    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = this.http.get<Hero>(this.baseUrl + this.endpoint + "/" + id);
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return hero;
  }

  updateHero(hero: Hero): Observable<Hero> {
    const updatedHero = this.http.put<Hero>(this.baseUrl + this.endpoint + "/" + hero.id, hero);
    this.messageService.add(`HeroService: updated hero id=${hero.id}`);
    return updatedHero;
  }

  addHero(hero: Hero): Observable<Hero> {
    const newHero = this.http.post<Hero>(this.baseUrl + this.endpoint, hero);
    this.messageService.add(`HeroService: created hero id=${hero.id}`);
    return newHero;
  }

  deleteHero(id: number): Observable<Hero> {
    const deletedHero = this.http.delete<Hero>(this.baseUrl + this.endpoint + "/" + id);
    this.messageService.add(`HeroService: deleted hero id=${id}`);
    return deletedHero;
  }

  searchHeroes(term: string): Observable<Hero[]> {

    if (!term.trim()) {
      this.messageService.add(`HeroService: no hero found for term "${term}"`);
      return of([]);
    }

    const hero = this.http.get<Hero[]>(this.baseUrl + this.endpoint + "?name=" + term);
    this.messageService.add(`HeroService: fetched heros with term =${term}`);
    return hero;
  }
}
