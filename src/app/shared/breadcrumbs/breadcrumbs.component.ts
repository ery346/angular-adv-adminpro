import { Component } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent  {

  titulo: string = '';
  tituloSub$!: Subscription;
  constructor(private ro: Router) { 
    this.tituloSub$ = this.getArgumentosRuta().subscribe(dato => {
      this.titulo = dato.snapshot.data.titulo;
      document.title = `Adminpro - ${this.titulo}`;
      console.log(dato)
    });
  }
  ngOnDestroy(): void {
    this.tituloSub$.unsubscribe();
      document.title = `Admin Pro`;
  }
  getArgumentosRuta(){
    return this.ro.events
    .pipe(
      filter((event: any) => event instanceof ActivationEnd),
      filter((event:ActivationEnd) => event.snapshot.firstChild === null ),
    )
  
  }

}
