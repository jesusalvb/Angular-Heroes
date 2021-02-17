import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { Hero } from './hero'
import { HEROES } from './mock-heroes';
import { HeroesComponent } from './heroes/heroes.component';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  /*
  //Original
  getHeroes(): Hero[] {
    return HEROES;
  }*/

  //Observable
  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES);
    //Send a message
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
