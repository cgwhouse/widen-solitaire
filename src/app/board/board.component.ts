import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  constructor() {
    console.log('board constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit for board');
  }
}
