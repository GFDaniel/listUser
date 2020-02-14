import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../services/data-api.service';
import { UserInterface } from '../models/user-interface';
import { AppComponent } from '../app.component';
import { faArrowLeft, faEllipsisV, faEdit, faToggleOff } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-perfil-component',
  templateUrl: './perfil-component.component.html',
  styleUrls: ['./perfil-component.component.sass']
})
export class PerfilComponentComponent implements OnInit {

  arrowIcon = faArrowLeft;
  ellipsisVcon = faEllipsisV;
  editIcon = faEdit;
  toggleIcon = faToggleOff;

  user: UserInterface;
  pageActual: number = 1;
  public myCounter: number = 0;

  constructor(private dataApiService: DataApiService, public appComponent:AppComponent) { }

  ngOnInit() {
    this.dataApiService.getUserById(this.appComponent.getIdUserSelected()).subscribe((response: any) =>{
      this.user = response.result
      console.log(response.result)
    });
  }

  back(){
    this.appComponent.showTab()
  }

}
