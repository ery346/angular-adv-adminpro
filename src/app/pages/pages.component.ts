import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../shared/services/settings.service';

declare function customInitFunctions(): void;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {
 
  constructor(private settingsS: SettingsService) { }

  ngOnInit(): void {
    customInitFunctions();
  }

}


