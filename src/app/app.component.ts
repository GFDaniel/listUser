import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'projectTest';
  showTable: boolean = true;
  showUser: boolean = false;
  idUserSelected: string;

  public setIdUserSelected(id: string){
    this.idUserSelected = id;
  }

  public getIdUserSelected(){
    return this.idUserSelected;
  }

  public hideTable(){
    this.showTable = false;
    this.showUser = true;
  }

  public showTab(){
    this.showTable = true;
    this.showUser = false;
  }
}
