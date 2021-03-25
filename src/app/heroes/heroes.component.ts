import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HEROES } from '../mock-heroes';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // el componente no llama directamente a los heroes(myheroes = HEROES;),
  // lo que hace es llamar al servicio:
  myheroes: Hero[] = [];
  selectedHero?: Hero;

  // Se agrega un parámetro privado de tipo HeroService al constructor
  // para inyectar el servicio
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getServiceHeroes();
  }
  // método para seleccionar un héroe.
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  //  método para recuperar a los héroes del servicio.
  getServiceHeroes(): void {
     this.heroService.getHeroes().subscribe(
        heroes => this.myheroes = heroes);
  }
}
