import { Component } from '@angular/core';

@Component({
  selector: 'app-notpagefound',
  templateUrl: './notpagefound.component.html',
  styleUrls: ['./error404.component.css']
})
export class NotpagefoundComponent  {

  year = new Date().getFullYear();

}
