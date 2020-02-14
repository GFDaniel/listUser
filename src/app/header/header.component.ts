import { Component, OnInit } from '@angular/core';
import { faFolder, faBell, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  folderIcon = faFolder;
  bellIcon = faBell;
  plusIcon = faPlus;
  searchIcon = faSearch;
  
  constructor() { }

  ngOnInit() {
  }

}
