import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  private termino: string;
  private heroesResults: Heroe[];

  constructor(private _heroesService: HeroesService,
              private activatedRoute: ActivatedRoute,
              private router: Router)
  {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params.termino;
      this.heroesResults = this._heroesService.buscarHeroes(this.termino);
      console.log(this.heroesResults);
    })
  }

}
