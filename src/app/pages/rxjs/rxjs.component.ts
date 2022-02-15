import { Component, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { filter, map, retry, take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy   {

  intervalSubs!: Subscription;
  constructor() {
   
    // this.retornaObservable().pipe( 
    //   retry() //repite la secuencia en caso d obtener un error
    // ).subscribe(valor => {
    //   console.log('subs:', valor)
    // }, err => {
    //   console.warn('error!!!!', err)
    // },
    //   () => {
    //   console.info('Obervable terminado')
    // }
    // );
    this.intervalSubs =  this.retornaIntervalo().subscribe( console.log)

   }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

   retornaIntervalo(): Observable<number>{
     return interval(200) // observaable que ejecuta secuencia de numeros en milesimas de segundos
                        .pipe(
                          // take(10),// cuando llega al numero que se le indique, detiene el interval    
                          map( valor => valor + 1), //con map puedes transformar la info, si el valor es numerico puedes retornar string pero serian repetidos
                          filter(valor => (valor % 2 === 0) ? true: false )// determina si quieres emitir un valor o no de manera condicional

                          )

  
   }
   retornaObservable(): Observable<number>{
    let i = -1;
    const obs$ = new Observable<number>( observer => {
      
      const int = setInterval(() => {
        i++;
        observer.next(i);
        if (i===4) {
          clearInterval( int );// termina el setInterval
          observer.complete();// termina el observer
        }
        if (i===2) {
          observer.error('i llego a 2');//manda error y termina el observer
        }
      }, 1000)
    });

    return obs$;
   }


}
