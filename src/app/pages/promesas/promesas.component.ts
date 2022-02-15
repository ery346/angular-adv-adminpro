import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios().then(usuarios => {
      console.log(usuarios)
    })
    // const promesa = new Promise( (resolve, reject) => {
    //   if(false){
    //     resolve('hola perra');
    //   }else{
    //     reject('error');
    //   }
    // });

    // promesa.then((msg) => {
    //   console.log(msg)
    // }).catch( (error) => {
    //   console.log(error)
    // });
  }

  getUsuarios(){

    const promesa = new Promise((resolve) => [

      fetch('https://reqres.in/api/users')
      .then(resp => resp.json())
      .then(res => resolve(res.data) )

    ]);
    return promesa
   
  }
}
