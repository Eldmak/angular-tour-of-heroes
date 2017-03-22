import 'rxjs/add/operator/switchMap';
import { Component, OnInit, Input }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Hero, Application, categories, /*cats,*/ nominations }        from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  @Input()
  hero: Hero;

  categories: string[];
  nominations: string[];
  // cats: Object;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {    
    // console.log(Object.keys(cats));
    // console.log(categories);
    this.categories = categories;
    this.nominations = nominations;
    
    // this.cats = cats;
  }

  ngOnInit(): void {    
    // this.route.params
    //   .switchMap((params: Params) => this.heroService.getHero(+params['id']))
    //   .subscribe(hero => {this.hero = hero});    
  }

  save(): void {
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  addApplication(category: string, nomination: string): void{
    if(!this.hero.applications)
      this.hero.applications = [];
    this.hero.applications.push({'id': 0, 'category': category, 'nomination': nomination});
  }

  removeApplication(application: Application): void {
    this.hero.applications.splice(this.hero.applications.indexOf(application), 1);
  }

  // keys(): string[] { return Object.keys(cats) };
}
