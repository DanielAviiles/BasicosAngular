import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;

  constructor(private _heroesService: HeroesService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.heroes = this._heroesService.generarHeroes();

    this.activatedRoute.params.subscribe((parametros) => {
      this.termino = parametros['termino'];
      if (parametros.termino === undefined) {
        this.router.navigate(['heroes']);
      } else {
        this.heroes = this._heroesService.buscarHeroes(parametros['termino']);
      }
    });
  }

  verHeroe(indes: number) {
    this.router.navigate(['heroe', indes]);
  }

}
