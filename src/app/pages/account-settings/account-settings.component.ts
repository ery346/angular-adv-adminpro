import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/shared/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor(private settingsS: SettingsService) { }

  ngOnInit(): void {
    this.settingsS.checarTema();
  }

  changeTheme(tema: string){
    this.settingsS.changeTheme(tema);
  }

 
}
