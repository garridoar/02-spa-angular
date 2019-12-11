import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: []
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() private heroe: Heroe;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  seeInfo(nombre: string): void {
    this.router.navigate( ['/heroe', nombre] );
  }


}
