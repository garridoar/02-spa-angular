import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  private heroe: Heroe;

  constructor( private activatedRoute: ActivatedRoute,
               private heroesService: HeroesService 
  ) { 
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this.heroesService.getHeroe(params.id);
      // console.log(this.heroe);
    });
  }

  ngOnInit() {
  }

}
