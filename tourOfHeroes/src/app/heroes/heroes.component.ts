import { Component } from '@angular/core';
import { Hero } from '../Hero/Hero';
import { HEROES } from '../mock-heroes/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: Hero[];
  flag = false;
  selectedHero?: Hero;
  selectedName: any; // resolving error by providing any as datatype not string, number
  selectedId: any;
  //NEW HERO
  inputNewHero = false;
  inputUpdateHero = false;
  inputDeleteHero = false;
  constructor() {
    this.heroes = HEROES;
    this.selectedHero = new Hero();
  }
  // ngOnInit(){
  //   // selectedHero=null;
  // }
  // onSelect(hero: Hero){
  //   this.selectedHero = hero;
  // }
  heroInfo(temp: number) {
    this.flag = true;
    this.selectedHero = this.heroes.find(h => h.id === temp); // lambda expression, for-each loop, return an object from heroes
    this.selectedName = this.heroes.find(h => h.id === temp)?.name;
    this.selectedId = this.heroes.find(h => h.id === temp)?.id;
  }

  getLastHeroId(): number{
    return this.heroes.sort((a:Hero,b:Hero) => b.id-a.id)[0].id; //b-a --> Desending & a-b --> Asending order, lambda expression is returing a collection of heroes (array), using arr[index] find your last element
  }

  submit(name: string) {
    let hero = new Hero(); // way of declaring a variable (3rd type)
    hero.name = name;
    hero.id=this.getLastHeroId()+1;
    this.heroes.push(hero);
    this.heroes.sort((a:Hero, b:Hero) => a.id-b.id);
    this.inputNewHero=false;
    // this.heroes=this.heroes.filter(h => h.id!==this.getLastHeroId()) // difference b/t filter & find
  }

  updateSubmit(num: string, name: string){
    // type-conversion to number: using of + as prefix converts any datatype to number
    this.heroes.find(h => h.id === +(num))!.name=name; // use of "!", It is used when we know that a variable that TypeScript thinks could be null or undefined actually isn't.
    this.inputUpdateHero=false;
  }

  deleteHero(num: string){
    this.heroes=this.heroes.filter(h => h.id!==+(num));
    this.inputDeleteHero=false;
  }
}