  
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataApiService } from '../services/data-api.service';
import { UserInterface } from '../models/user-interface';
import { AppComponent } from '../app.component';
import { faUser, faPhone, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-lista-component',
  templateUrl: './lista-component.component.html',
  styleUrls: ['./lista-component.component.sass']
})
export class ListaComponentComponent implements OnInit {

  userfolderIcon = faUser;
  phonecon = faPhone;
  plusIcon = faPlus;
  searchIcon = faSearch;

  private users: UserInterface;
  pageActual: number = 1;
  public myCounter: number = 0;


  constructor(private dataApiService: DataApiService, public appComponent:AppComponent) { }
  
  ngOnInit() {
    this.getListUsers();
  }

  getListUsers(): void {
    this.dataApiService
      .getAllUsers()
      .subscribe((response: any) => (this.users = response.result));
  }

  onPreUser(user: UserInterface): void {
    this.appComponent.setIdUserSelected(user.id)
    this.appComponent.hideTable()
  }

}
